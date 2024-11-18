schema {
  query: Query
  mutation: Mutation
}

type Premium_Adjustment {
  Product_Name: String!
  Report_Period: String!
  Status: String!
  Last_Update: String!
  Period_Ending: String!
  Adjustment_Type_to_the_Credit_Union: String!
  Comment: String!
  Total_Borrower_Fees_: Float!
  CU_Retail_Rate: Float!
  Protected_Loan_Amount: Float!
  Pay_Rate: Float!
  Premium_Due: Float!
  Total_Amount: Float!
}

type Single_Premium_Certificate_Return {
  # Define fields specific to this type if any
}

type Query {
  getPremiumAdjustments: [Premium_Adjustment!]!
  getSinglePremiumCertificateReturns: [Single_Premium_Certificate_Return!]!
}

type Mutation {
  addPremiumAdjustment(input: PremiumAdjustmentInput!): Premium_Adjustment!
}

input PremiumAdjustmentInput {
  Product_Name: String!
  Report_Period: String!
  Status: String!
  Last_Update: String!
  Period_Ending: String!
  Adjustment_Type_to_the_Credit_Union: String!
  Comment: String!
  Total_Borrower_Fees_: Float!
  CU_Retail_Rate: Float!
  Protected_Loan_Amount: Float!
  Pay_Rate: Float!
  Premium_Due: Float!
  Total_Amount: Float!
}
#