import {Request, Response} from 'express';
import {dougsTransactions} from './models';
import {validate} from './validation/validation.controller';

export const postValidationUseCase = async (
  request: Request<
    never,
    never,
    {
      movements: dougsTransactions.Transactions[];
      balances: dougsTransactions.checkBalance[];
    },
    never
  >,
  response: Response,
) => {
  try {
    const {body} = request;
    const {movements, balances} = body;
    const result = await validate(movements, balances);
    return response.status(202).json(result);
  } catch (e) {
    return response.status(418).json({message: e});
  }
};
