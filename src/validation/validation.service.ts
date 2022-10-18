import {fakeTransaction} from '../../assets/data';
import {dougsTransactions} from '../models';

export function getMovementByIds(idArray: number[]) {
  return fakeTransaction.filter(data => idArray.includes(data.id));
}

export function getMovementByDate(
  transactions: dougsTransactions.Transactions[],
  time: number,
) {
  return transactions.filter(transaction => transaction.createdDate <= time);
}

export function getBalanceFromMovement(
  transactions: dougsTransactions.Transactions[],
): number {
  return transactions.reduce((acc, transaction) => {
    if (Math.sign(transaction.amount) === 1) {
      return acc + transaction.amount;
    } else {
      return acc - Math.abs(transaction.amount);
    }
  }, 0);
}

export function getDiffBalance(balanceInStartOfMonth: number, balance: number) {
  return (
    balanceInStartOfMonth -
    (Math.sign(balance) === 1 ? balance : Math.abs(balance))
  );
}

export function isCheckPointValid(diffBalance: number, balance: number) {
  return diffBalance === balance;
}
