export declare module dougsTransactions {
  export interface Account {
    id: string;
    type: string;
  }

  export interface checkBalance {
    date: number;
    balance: number;
  }

  export interface Recipient {
    id: string;
    account: Account;
  }

  export interface Transactions {
    id: number;
    type: string;
    state: string;
    updatedDate: number;
    completedDate: number;
    createdDate: any;
    currency: string;
    amount: number;
    fee: number;
    balance: number;
    description: string;
    account: Account;
    sender: string;
    reason: string;
    countryCode: string;
    recipient: Recipient;
  }
}
