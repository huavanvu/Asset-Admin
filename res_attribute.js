/**
 * @api {get} /res_attribute/list Get List Attribute
 * @apiVersion 0.1.0
 * @apiName GetListAttribute
 * @apiGroup Attribute
 * @apiSuccess {Object} list List of Attribute.
 * @apiSuccessExample Success-Response:
 *  [
 *      {
 *          create_date: "2019-08-28T16:17:38.841Z",
 *          _id: "5d66a92630572a3adcb53e2c",
 *          name: "Diện tích",
 *          code: "area",
 *          __v: 0
 *      },
 *      {
 *          create_date: "2019-08-28T16:17:38.841Z",
 *          _id: "5d66a92630572a3adcb53e2d",
 *          name: "Hướng",
 *          code: "Direction",
 *          __v: 0
 *      }
 *  ]
 */


/**
 * @api {post} /res_attribute/add Add New Attribute
 * @apiVersion 0.1.0
 * @apiName AddNewAttribute
 * @apiGroup Attribute
 * @apiParam {Boolean} status Attribute Status.
 * @apiParam {ObjectId} delete_id Attribute Delete ID.
 * @apiParam {String} name Attribute Name.
 * @apiParam {String} code Attribute Code.
 * @apiParam {Number} sequence Attribute Sequence.
 * @apiParamExample {json} Request-Example:
 *     {
 *          create_date: "2019-08-28T16:17:38.841Z",
 *          _id: "5d66a92630572a3adcb53e2c",
 *          name: "Diện tích",
 *          code: "area",
 *          __v: 0
 *     }
 * @apiSuccessExample Success-Response-Data:
 *  [
 *     HTTP/1.1 200 OK
 *  ]
 */