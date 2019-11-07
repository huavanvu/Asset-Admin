/**
 * @api {post} /guide/add Add New Guide
 * @apiVersion 0.1.0
 * @apiName AddNewGuide
 * @apiGroup Guide
 * @apiParam {Boolean} status Guide Status.
 * @apiParam {ObjectId} delete_id Guide Delete ID.
 * @apiParam {String} name Guide Name.
 * @apiParam {ObjectId} category_id Guide Category ID.
 * @apiParam {String} answer Recruit Answer.
 * @apiParam {String} url_name Guide URL Name.
 * @apiParam {Number} sequence Guide Sequence.
 * @apiParam {String} keyword Guide Keyword.
 * @apiSuccess {String} description Guide Description.
 * @apiSuccess {Object} reaction Guide Reaction.
 * @apiParamExample {json} Request-Example:
 *     {
 *      "create_uid" : ObjectId("5d679819325ab70ab0157ce5"),
 *      "create_date" : ISODate("2019-10-04T07:17:49.952Z"),
 *      "write_uid" : ObjectId("5d679819325ab70ab0157ce5"),
 *      "write_date" : ISODate("2019-10-04T07:17:49.952Z"),
 *      "company_id" : "ROOT",
 *      "status" : false,
 *      "delete_id" : null,
 *      "category_id" : [],
 *      "short_description" : "",
 *      "reaction" : [],
 *      "name" : "Asset là gì?",
 *      "answer" : "Asset là thị trường bất động sản",
 *      "__v" : 0,
 *      "approve" : "APPROVED"
 *     }
 * @apiSuccessExample Success-Response-Data:
 *  [
 *     HTTP/1.1 200 OK
 *  ]
 */


 /**
 * @api {get} /guide/list Get List Guide
 * @apiVersion 0.1.0
 * @apiName GetListGuide
 * @apiGroup Guide
 * @apiParam {Int32} page Number of page.
 * @apiParam {Int32} limit Number of items in one page .
 * @apiParamExample Example:
 *     {
 *       "page": 1,
 *       "limit": 1
 *     }
 * 
 * @apiSuccess {Object} list List of Recruit.
 * @apiSuccessExample Success-Response:
 *  [
 *      {
 *          create_uid: "5d679819325ab70ab0157ce5",
 *          create_date: "2019-10-04T08:58:51.467Z",
 *          write_uid: "5d679819325ab70ab0157ce5",
 *          write_date: "2019-10-04T08:58:51.467Z",
 *          company_id: "ROOT",
 *          status: true,
 *          delete_id: null,
 *          category_id: [
 *              "5d970fb503ca2d152823edd9"
 *          ],
 *          description: "",
 *          sequence: 1,
 *          keyword: "",
 *          reaction: [ ],
 *          _id: "5d97102a03ca2d152823eddf",
 *          name: "Dẫn dắt",
 *          url_name: "dan-dat",
 *          answer: "<p>Trong quá trình kết nối xác thực, những người dẫn đầu đã nói với chúng tôi rằng họ chưa sẵn sàng nói chuyện với người đại diện sẽ được chuyển cho bạn để nuôi dưỡng. Những khách hàng tiềm năng này đã được gửi trực tiếp đến Hộp thư đến Đại lý Cấp 1 của bạn với một chỉ định trạng thái mới. Bằng cách này, bạn sẽ nhận được các cơ hội bổ sung và có thể trực tiếp quản lý quá trình nuôi dưỡng chì. Số lượng khách hàng tiềm năng bạn nhận được dựa trên phần chia sẻ giọng nói Quảng cáo Đại lý của bạn, nhưng chúng sẽ không ảnh hưởng đến chia sẻ kết nối điện thoại trực tiếp của bạn.</p>",
 *          __v: 0,
 *          approve: "APPROVED",
 *          category: [
 *              {
 *                  create_uid: "5d679819325ab70ab0157ce5",
 *                  create_date: "2019-10-04T08:58:51.464Z",
 *                  write_uid: "5d679819325ab70ab0157ce5",
 *                  write_date: "2019-10-04T08:58:51.464Z",
 *                  company_id: "ROOT",
 *                  status: true,
 *                  parent_id: "5d970e9203ca2d152823edcd",
 *                  sequence: 0,
 *                  description: "",
 *                  _id: "5d970fb503ca2d152823edd9",
 *                  name: "Kết nối",
 *                  url_name: "ket-noi",
 *                  __v: 0
 *              }
 *          ],
 *          id: "5d97102a03ca2d152823eddf"
 *      },
 *   ]
 */



 /**
 * @api {get} /guide/count Count Number Of Guide
 * @apiVersion 0.1.0
 * @apiName CountNumberOfGuide
 * @apiGroup Guide
 * @apiSuccess {Int32} number Number of Guide.
 * @apiSuccessExample Success-Response-Data:
 *  {
 *    195
 *  }
 */



  /**
 * @api {get} /guide/detail Get Guide Detail 
 * @apiVersion 0.1.0
 * @apiName GetGuideDetail
 * @apiGroup Guide
 * @apiParam {ObjectID} id ID of guide item .
 * @apiParamExample Example:
 *     {
 *       "id": 5d96f24a0e6a5137e42dc153
 *     }
 * 
 * @apiSuccess {Object} Guide Detail.
 * @apiSuccessExample Success-Response:
 *  {
 *      create_uid: null,
 *      create_date: "2019-10-04T07:17:49.952Z",
 *      write_uid: "5d679819325ab70ab0157ce5",
 *      write_date: "2019-10-04T07:17:49.952Z",
 *      company_id: "ROOT",
 *      status: false,
 *      delete_id: null,
 *      category_id: [ ],
 *      description: "",
 *      sequence: 0,
 *      keyword: "",
 *      reaction: [ ],
 *      _id: "5d96f24a0e6a5137e42dc153",
 *      short_description: "",
 *      name: "Asset là gì?",
 *      answer: "Asset là thị trường bất động sản",
 *      __v: 0,
 *      approve: "APPROVED",
 *      id: "5d96f24a0e6a5137e42dc153"
 *  }
 */



 /**
 * @api {put} /guide/edit Edit Guide
 * @apiVersion 0.1.0
 * @apiName EditGuide
 * @apiGroup Guide
 * @apiParam {ObjectID} id Guide ID.
 * @apiParam {String} name Guide Name.
 * @apiParamExample {json} Request-Example:
 *     {
 *       "id": "5d96f24a0e6a5137e42dc153",
 *       "name": "Asset có gì đặc biệt?"
 *     } 
 * @apiSuccessExample Success-Response-Data:
 *  [
 *     HTTP/1.1 200 OK
 *  ]
 */


  /**
 * @api {delete} /guide/delete Delete Guide
 * @apiVersion 0.1.0
 * @apiName DeleteGuide
 * @apiGroup Guide
 * @apiParam {ObjectID} id Guide ID.
 * @apiParamExample {json} Request-Example:
 *     {
 *       "id": "5d96f24a0e6a5137e42dc153"
 *     } 
 * @apiSuccessExample Success-Response-Data:
 *  [
 *     HTTP/1.1 200 OK
 *  ]
 */