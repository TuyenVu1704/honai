export const validateRequiredInput = (data, arrRequired) => {
  const missingFields = arrRequired.filter(
    (field) => !JSON.stringify(data[field])
  );
  return missingFields;
};
