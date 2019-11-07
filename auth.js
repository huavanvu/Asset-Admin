/**
 * @api {get} /auth/authenticate Check Authenticate
 * @apiVersion 0.1.0
 * @apiName CheckAuthenticate
 * @apiGroup Authenticate
 * @apiSuccess {Boolean} status Authenticate Status.
 * @apiSuccess {String} message Authenticate Message.
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status":true,
 *       "message":"ok"
 *     }
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "status":false,
 *       "message":"Không thể tìm thấy token"
 *     }
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "status":false,
 *       "message":"Token không hợp lệ"
 *     }
 */

/**
 * @api {get} /auth/logout Logout
 * @apiVersion 0.1.0
 * @apiName Logout
 * @apiGroup Authenticate
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "isLogin":false
 *     }
 */

