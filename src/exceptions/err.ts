class Err extends Error {
    statusCode: number;
    code: string;

    constructor(message: string, statusCode: number, code = '') {
        super(message);
        this.statusCode = statusCode;
        this.code = code;
    }

    // 400 Bad Request
    static badRequest(message = '', code = '') {
        return new Err(message || 'Bad Request', 400, code || 'bad_request');
    }

    static invalidCredentials(message = '', code = '') {
        return new Err(message || 'Invalid credentials', 400, code || 'invalid_credentials');
    }

    static invalidContentType(message = '', code = '') {
        return new Err(message || 'Invalid content type', 400, code || 'invalid_content_type');
    }

    // 401 Unauthorized
    static authenticationRequired(message = '', code = '') {
        return new Err(message || 'Authentication required', 401, code || 'authentication_required');
    }

    static invalidToken(message = '', code = '') {
        return new Err(message || 'Invalid token', 401, code || 'Invalid_token');
    }

    // 402 Payment Required
    static paymentRequired(message = '', code = '') {
        return new Err(message || 'Payment Required', 402, code || 'payment_required');
    }

    // 403 Forbidden
    static notAuthorized(message = '', code = '') {
        return new Err(message || 'Not authorized', 403, code || 'not_authorized');
    }

    // 404 Not Found
    static notFound(message = '', code = '') {
        return new Err(message || 'Not found', 404, code || 'not_found');
    }

    // 405 Method Not Allowed
    static methodNotAllowed(message = '', code = '') {
        return new Err(message || 'Method Not Allowed', 405, code || 'method_not_allowed');
    }

    // 406 Not Acceptable
    static notAcceptable(message = '', code = '') {
        return new Err(message || 'Not Acceptable', 406, code || 'not_acceptable');
    }

    // 409 Conflict
    static resourceExists(message = '', code = '') {
        return new Err(message || 'Resource already exists', 409, code || 'resource_already_exists');
    }

    static resourceConflict(message = '', code = '') {
        return new Err(message || 'Resource conflict', 409, code || 'resource_conflict');
    }

    // 410 Gone
    static gone(message = '', code = '') {
        return new Err(message || 'Gone', 410, code || 'gone');
    }

    // 411 Length Required
    static lengthRequired(message = '', code = '') {
        return new Err(message || 'Length Required', 411, code || 'length_required');
    }

    // 412 Precondition Failed
    static preconditionFailed(message = '', code = '') {
        return new Err(message || 'Precondition Failed', 412, code || 'precondition_failed');
    }

    // 413 Payload Too Large
    static payloadTooLarge(message = '', code = '') {
        return new Err(message || 'Payload Too Large', 413, code || 'payload_too_large');
    }

    // 414 URI Too Long
    static uriTooLong(message = '', code = '') {
        return new Err(message || 'URI Too Long', 414, code || 'uri_too_long');
    }

    // 415 Unsupported Media Type
    static unsupportedMediaType(message = '', code = '') {
        return new Err(message || 'Unsupported Media Type', 415, code || 'unsupported_media_type');
    }

    // 416 Range Not Satisfiable
    static rangeNotSatisfiable(message = '', code = '') {
        return new Err(message || 'Range Not Satisfiable', 416, code || 'range_not_satisfiable');
    }

    // 417 Expectation Failed
    static expectationFailed(message = '', code = '') {
        return new Err(message || 'Expectation Failed', 417, code || 'expectation_failed');
    }

    // 418 I'm a teapot
    static imATeapot(message = '', code = '') {
        return new Err(message || "I'm a teapot", 418, code || 'im_a_teapot');
    }

    // 421 Misdirected Request
    static misdirectedRequest(message = '', code = '') {
        return new Err(message || 'Misdirected Request', 421, code || 'misdirected_request');
    }

    // 422 Unprocessable Entity
    static unprocessableEntity(message = '', code = '') {
        return new Err(message || 'Unprocessable Entity', 422, code || 'unprocessable_entity');
    }

    // 423 Locked
    static locked(message = '', code = '') {
        return new Err(message || 'Locked', 423, code || 'locked');
    }

    // 424 Failed Dependency
    static failedDependency(message = '', code = '') {
        return new Err(message || 'Failed Dependency', 424, code || 'failed_dependency');
    }

    // 425 Too Early
    static tooEarly(message = '', code = '') {
        return new Err(message || 'Too Early', 425, code || 'too_early');
    }

    // 426 Upgrade Required
    static upgradeRequired(message = '', code = '') {
        return new Err(message || 'Upgrade Required', 426, code || 'upgrade_required');
    }

    // 428 Precondition Required
    static preconditionRequired(message = '', code = '') {
        return new Err(message || 'Precondition Required', 428, code || 'precondition_required');
    }

    // 429 Too Many Requests
    static tooManyRequests(message = '', code = '') {
        return new Err(message || 'Too Many Requests', 429, code || 'too_many_requests');
    }

    // 431 Request Header Fields Too Large
    static requestHeaderFieldsTooLarge(message = '', code = '') {
        return new Err(message || 'Request Header Fields Too Large', 431, code || 'request_header_fields_too_large');
    }

    // 451 Unavailable For Legal Reasons
    static unavailableForLegalReasons(message = '', code = '') {
        return new Err(message || 'Unavailable For Legal Reasons', 451, code || 'unavailable_for_legal_reasons');
    }

    // 500 Internal Server Error
    static serverError(message = '', code = '') {
        return new Err(message || 'Internal server error', 500, code || 'internal_server_error');
    }

    // 501 Not Implemented
    static notImplemented(message = '', code = '') {
        return new Err(message || 'Not Implemented', 501, code || 'not_implemented');
    }

    // 502 Bad Gateway
    static badGateway(message = '', code = '') {
        return new Err(message || 'Bad Gateway', 502, code || 'bad_gateway');
    }

    // 503 Service Unavailable
    static serviceUnavailable(message = '', code = '') {
        return new Err(message || 'Service Unavailable', 503, code || 'service_unavailable');
    }

    // 504 Gateway Timeout
    static gatewayTimeout(message = '', code = '') {
        return new Err(message || 'Gateway Timeout', 504, code || 'gateway_timeout');
    }

    // 505 HTTP Version Not Supported
    static httpVersionNotSupported(message = '', code = '') {
        return new Err(message || 'HTTP Version Not Supported', 505, code || 'http_version_not_supported');
    }

    // 506 Variant Also Negotiates
    static variantAlsoNegotiates(message = '', code = '') {
        return new Err(message || 'Variant Also Negotiates', 506, code || 'variant_also_negotiates');
    }

    // 507 Insufficient Storage
    static insufficientStorage(message = '', code = '') {
        return new Err(message || 'Insufficient Storage', 507, code || 'insufficient_storage');
    }

    // 508 Loop Detected
    static loopDetected(message = '', code = '') {
        return new Err(message || 'Loop Detected', 508, code || 'loop_detected');
    }

    // 510 Not Extended
    static notExtended(message = '', code = '') {
        return new Err(message || 'Not Extended', 510, code || 'not_extended');
    }

    // 511 Network Authentication Required
    static networkAuthenticationRequired(message = '', code = '') {
        return new Err(message || 'Network Authentication Required', 511, code || 'network_authentication_required');
    }

    // Throw error
    static send(statusCode: number, message: string, code: string) {
        return new Err(message, statusCode, code);
    }
}

export default Err;