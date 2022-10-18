import {dougsTransactions} from '../models';
import {getMovementByDate, isCheckPointValid} from './validation.service';

export function validate(
  movements: dougsTransactions.Transactions[],
  balances: dougsTransactions.checkBalance[],
) {
  return new Promise((resolve, reject) => {
    const error: any = [];
    balances.forEach((balance: dougsTransactions.checkBalance) => {
      const movementsByDate = getMovementByDate(movements, balance.date);
      const balanceFromLastTransaction = movementsByDate.at(-1)?.balance;

      if (
        balanceFromLastTransaction &&
        isCheckPointValid(balanceFromLastTransaction, balance.balance)
      ) {
        resolve({message: 'Accepted'});
      } else {
        for (const transaction of movementsByDate) {
          const result = {
            date: transaction.createdDate,
            description: transaction.description,
            amount: transaction.amount,
            id: transaction.id,
          };
          error.push(result);
        }
        reject({message: 'Rejected', raison: error});
      }
    });
  });
}
