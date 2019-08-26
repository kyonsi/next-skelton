declare namespace NodeJS {
  interface Global {
    store: any;
    metapspayment: {
      validateCardNumber: (number) => boolean;
      validateExpiryYear: (number) => boolean;
      validateExpiryMonth: (number) => boolean;
      validateExpiry: (number, number) => boolean;
      createToken: (
        options: {
          number: number;
          csc: string;
          exp_m: number;
          exp_y: number;
        },
        callback: (status: any, response: any) => any
      ) => void;
    };
  }
}

declare namespace NodeJS {
  interface Global {
    store: any;
    metapspayment: {
      validateCardNumber: (number) => boolean;
      validateExpiryYear: (number) => boolean;
      validateExpiryMonth: (number) => boolean;
      validateExpiry: (number, number) => boolean;
      createToken: (
        options: {
          number: number;
          csc: string;
          exp_m: number;
          exp_y: number;
        },
        callback: (status: any, response: any) => any
      ) => void;
    };
  }
}
