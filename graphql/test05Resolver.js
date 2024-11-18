const resolvers = {
  Query: {
    getPremiumAdjustments: () => {
      // Placeholder data
      return [
        {
          Product_Name: "Example Product",
          Report_Period: "2023 Q1",
          Status: "Active",
          Last_Update: "2023-10-01",
          Period_Ending: "2023-12-31",
          Adjustment_Type_to_the_Credit_Union: "Credit",
          Comment: "Monthly adjustment",
          Total_Borrower_Fees_: 150.0,
          CU_Retail_Rate: 5.5,
          Protected_Loan_Amount: 10000.0,
          Pay_Rate: 3.5,
          Premium_Due: 300.0,
          Total_Amount: 1200.0
        }
      ];
    },
    getSinglePremiumCertificateReturns: () => {
      // Placeholder for Single Premium Certificate Returns
      return [];
    }
  },
  Mutation: {
    addPremiumAdjustment: (_, { input }) => {
      // Placeholder for adding a new Premium Adjustment
      return {
        ...input
      };
    }
  }
};

module.exports = resolvers;