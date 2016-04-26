function SoapServiceException(faultCode, faultString, faultName) {
   this.name = 'SoapServiceException';
   this.faultCode = faultCode;
   this.faultString = faultString;
   this.faultName = faultName;
}
SoapServiceException.OPERATION_NOT_SPECIFIED = 'OPERATION_NOT_SPECIFIED';
SoapServiceException.MISSING_REQUIRED_INPUT = 'MISSING_REQUIRED_INPUT';
SoapServiceException.INVALID_INPUT_TYPE = 'INVALID_INPUT_TYPE';

module.exports = SoapServiceException;