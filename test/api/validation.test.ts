import supertest from 'supertest';
import {describe, it} from 'node:test';

describe('Validation', () => {
  it('should return 202', async () => {
    await supertest('http://localhost:3001')
      .post('/movements/validation')
      .send({
        movements: [
          {
            id: 1,
            type: 'TRANSFER',
            state: 'COMPLETED',
            updatedDate: 1660289100000,
            completedDate: 1660289100000,
            createdDate: 1660289100000,
            currency: 'EUR',
            amount: 9700,
            fee: 0,
            balance: 39700,
            description: 'From Arthur Cumin dee la croix',
            account: {
              id: '60a96997-5bf5-472b-9f5c-d59057f66a20',
              type: 'CURRENT',
            },
            sender: 'Florence',
            reason: 'TRANSFER',
            countryCode: 'FR',
          },
          {
            id: 2,
            type: 'CARD_PAYMENT',
            state: 'PENDING',
            startedDate: 1661434620000,
            updatedDate: 1661434620000,
            createdDate: 1661434620000,
            currency: 'EUR',
            amount: -9779,
            fee: 0,
            balance: 29921,
            description: 'Lidl Plaisir',
            tag: 'shopping',
            category: 'shopping',
            account: {
              id: '60a96997-5bf5-472b-9f5c-d59057f66a20',
              type: 'CURRENT',
            },
            countryCode: 'FR',
            chargebackEligible: true,
          },
          {
            id: 3,
            type: 'CARD_PAYMENT',
            state: 'PENDING',
            startedDate: 1662971400000,
            updatedDate: 1662971400000,
            createdDate: 1662971400000,
            currency: 'EUR',
            amount: -9779,
            balance: 19950,
            fee: 0,
            description: 'Auchan Plaisir',
            tag: 'shopping',
            category: 'shopping',
            account: {
              id: '60a96997-5bf5-472b-9f5c-d59057f66a20',
              type: 'CURRENT',
            },
            countryCode: 'FR',
            chargebackEligible: true,
          },
          {
            id: 4,
            type: 'CARD_PAYMENT',
            state: 'PENDING',
            startedDate: 1664112600000,
            updatedDate: 1664112600000,
            createdDate: 1664112600000,
            currency: 'EUR',
            amount: -9779,
            fee: 0,
            balance: 10171,
            description: 'Supermaché Plaisir',
            tag: 'shopping',
            category: 'shopping',
            account: {
              id: '60a96997-5bf5-472b-9f5c-d59057f66a20',
              type: 'CURRENT',
            },
            countryCode: 'FR',
            chargebackEligible: true,
          },
          {
            id: 5,
            type: 'CARD_PAYMENT',
            state: 'PENDING',
            startedDate: 1665563400000,
            updatedDate: 1665563400000,
            createdDate: 1665563400000,
            currency: 'EUR',
            amount: -9779,
            fee: 0,
            balance: 19950,
            description: 'Auchan Plaisir',
            tag: 'shopping',
            category: 'shopping',
            account: {
              id: '60a96997-5bf5-472b-9f5c-d59057f66a20',
              type: 'CURRENT',
            },
            countryCode: 'FR',
            chargebackEligible: true,
          },
        ],
        balances: [
          {
            date: 1661810400000,
            balance: 29921,
          },
        ],
      })
      .expect(202);
  });

  it('should return 401', async () => {
    await supertest('http://localhost:3001')
      .post('/movements/validation')
      .send({
        movements: [
          {
            id: 1,
            type: 'TRANSFER',
            state: 'COMPLETED',
            updatedDate: 1660289100000,
            completedDate: 1660289100000,
            createdDate: 1660289100000,
            currency: 'EUR',
            amount: 9700,
            fee: 0,
            balance: 39700,
            description: 'From Arthur Cumin dee la croix',
            account: {
              id: '60a96997-5bf5-472b-9f5c-d59057f66a20',
              type: 'CURRENT',
            },
            sender: 'Florence',
            reason: 'TRANSFER',
            countryCode: 'FR',
          },
          {
            id: 2,
            type: 'CARD_PAYMENT',
            state: 'PENDING',
            startedDate: 1661434620000,
            updatedDate: 1661434620000,
            createdDate: 1661434620000,
            currency: 'EUR',
            amount: -9779,
            fee: 0,
            balance: 29921,
            description: 'Lidl Plaisir',
            tag: 'shopping',
            category: 'shopping',
            account: {
              id: '60a96997-5bf5-472b-9f5c-d59057f66a20',
              type: 'CURRENT',
            },
            countryCode: 'FR',
            chargebackEligible: true,
          },
          {
            id: 3,
            type: 'CARD_PAYMENT',
            state: 'PENDING',
            startedDate: 1662971400000,
            updatedDate: 1662971400000,
            createdDate: 1662971400000,
            currency: 'EUR',
            amount: -9779,
            balance: 19950,
            fee: 0,
            description: 'Auchan Plaisir',
            tag: 'shopping',
            category: 'shopping',
            account: {
              id: '60a96997-5bf5-472b-9f5c-d59057f66a20',
              type: 'CURRENT',
            },
            countryCode: 'FR',
            chargebackEligible: true,
          },
          {
            id: 4,
            type: 'CARD_PAYMENT',
            state: 'PENDING',
            startedDate: 1664112600000,
            updatedDate: 1664112600000,
            createdDate: 1664112600000,
            currency: 'EUR',
            amount: -9779,
            fee: 0,
            balance: 10171,
            description: 'Supermaché Plaisir',
            tag: 'shopping',
            category: 'shopping',
            account: {
              id: '60a96997-5bf5-472b-9f5c-d59057f66a20',
              type: 'CURRENT',
            },
            countryCode: 'FR',
            chargebackEligible: true,
          },
          {
            id: 5,
            type: 'CARD_PAYMENT',
            state: 'PENDING',
            startedDate: 1665563400000,
            updatedDate: 1665563400000,
            createdDate: 1665563400000,
            currency: 'EUR',
            amount: -9779,
            fee: 0,
            balance: 19950,
            description: 'Auchan Plaisir',
            tag: 'shopping',
            category: 'shopping',
            account: {
              id: '60a96997-5bf5-472b-9f5c-d59057f66a20',
              type: 'CURRENT',
            },
            countryCode: 'FR',
            chargebackEligible: true,
          },
          {
            id: 6,
            type: 'TRANSFER',
            state: 'COMPLETED',
            updatedDate: 1660289100000,
            completedDate: 1660289100000,
            createdDate: 1660289100000,
            currency: 'EUR',
            amount: 9700,
            fee: 0,
            balance: 39700,
            description: 'From Arthur Cumin dee la croix',
            account: {
              id: '60a96997-5bf5-472b-9f5c-d59057f66a20',
              type: 'CURRENT',
            },
            sender: 'Florence',
            reason: 'TRANSFER',
            countryCode: 'FR',
          },
        ],
        balances: [
          {
            date: 1661810400000,
            balance: 29921,
          },
        ],
      })
      .expect(418);
  });
});
