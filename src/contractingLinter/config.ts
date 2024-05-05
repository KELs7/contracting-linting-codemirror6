export const SUBMISSION_CONTRACT_NAME = "submission";
export const PRIVATE_METHOD_PREFIX = "__";
export const EXPORT_DECORATOR_STRING = "export";
export const INIT_DECORATOR_STRING = "construct";
export const INIT_FUNC_NAME = `__${PRIVATE_METHOD_PREFIX}`;
export const VALID_DECORATORS = {EXPORT_DECORATOR_STRING, INIT_DECORATOR_STRING}
export const ORM_CLASS_NAMES = new Set(["Variable", "Hash", "ForeignVariable", "ForeignHash"]);
