import {describe, expect, test} from '@jest/globals';
import {
  getBalanceFromMovement,
  getDiffBalance,
  getMovementByDate,
  getMovementByIds,
  isCheckPointValid,
} from './validation/validation.service';
import {fakeTransaction} from '../assets/data';

describe('postValidationUseCase', () => {
  test('get all movement from id array', () => {
    const idArray = [1, 2, 4];
    const result = getMovementByIds(idArray);
    const expectedResult = [
      fakeTransaction.at(0),
      fakeTransaction.at(1),
      fakeTransaction.at(3),
    ];
    expect(result).toEqual(expectedResult);
  });
  test('filter by date', () => {
    const timeStamp = 1661810400000; //new Date('2022-08-30T00:00:00').getTime()
    const balance = {
      date: timeStamp,
      balance: 3000,
    };
    const exceptedResult = [fakeTransaction[0], fakeTransaction[1]];
    const result = getMovementByDate(fakeTransaction, balance.date);
    expect(result).toEqual(exceptedResult);
  });
  test('balance have equal to some of transaction', () => {
    const timeStamp = 1661810400000; //new Date('2022-08-30T00:00:00').getTime()
    const balanceInStartOfMonth = 30000;
    const balanceData = {
      date: timeStamp,
      balance: 29921,
    };
    const balance = -79;
    const resultBalance = getDiffBalance(balanceInStartOfMonth, balance);
    expect(resultBalance).toEqual(balanceData.balance);
  });

  test('should not to be equal of the chekpoint balance with a duplicate', () => {
    const timeStamp = 1661810400000; //new Date('2022-08-30T00:00:00').getTime()
    const fakeDuplicate = {
      ...fakeTransaction[1],
      id: 6,
    };
    const movements = [fakeTransaction[0], fakeTransaction[1], fakeDuplicate];
    const balanceInStartOfMonth = 30000;
    const checkpoint = {
      date: timeStamp,
      balance: 29921,
    };
    const balance = getBalanceFromMovement(movements);
    const diffBalance = getDiffBalance(balanceInStartOfMonth, balance);
    expect(diffBalance).not.toEqual(checkpoint.balance);
  });

  test('should return false it balance is not correct', () => {
    const timeStamp = 1661810400000; //new Date('2022-08-30T00:00:00').getTime()
    const fakeDuplicate = {
      ...fakeTransaction[1],
      id: 6,
    };
    const movements = [fakeTransaction[0], fakeTransaction[1], fakeDuplicate];
    const balanceFromStartOfMonth = 30000;
    const checkpoint = {
      date: timeStamp,
      balance: 29921,
    };
    const balance = getBalanceFromMovement(movements);
    const diffBalance = getDiffBalance(balanceFromStartOfMonth, balance);
    expect(
      isCheckPointValid(diffBalance, checkpoint.balance),
    ).not.toBeUndefined();
    expect(isCheckPointValid(diffBalance, checkpoint.balance)).toBeFalsy();
  });

  test('should return true it balance is correct', () => {});
});
