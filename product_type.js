/**
 * @api {get} /product/type/list Get List Of Product Type
 * @apiVersion 0.1.0
 * @apiName GetListOfProductType
 * @apiGroup Product Type
 * @apiParam {Int32} page Number of page.
 * @apiParam {Int32} limit Number of items in one page.
 * @apiSuccess {Object} list List of Product Type.
 * @apiParamExample Example:
 *     {
 *       "page": 1,
 *       "limit": 1
 *     }
 * @apiSuccessExample Success-Response-Data:
 *  [
 *     {
 *          company_id: "ROOT",
 *          parend_id: null,
 *          _id: "5d6e56c88e18e6eaf5076069",
 *          create_uid: "b01e6241-0488-40b1-bc53-525050cd6d58",
 *          create_date: "2019-07-27T06:09:00.176Z",
 *          write_uid: "b01e6241-0488-40b1-bc53-525050cd6d58",
 *          write_date: "2019-08-26T08:51:52.848Z",
 *          status: false,
 *          delete_id: "",
 *          type_name: "Bán",
 *          type: "",
 *          parent_id: "",
 *          type_code: "1",
 *          description: "",
 *          marker_url: "marker_bds_ban.svg",
 *          marker_hover_url: "marker_bds_ban_hover.svg",
 *          color_code: "#E91B23"
 *      }
 *  ]
 */



 /**
 * @api {get} /product/type/count Count Number Of Product Type
 * @apiVersion 0.1.0
 * @apiName CountNumberOfProductType
 * @apiGroup Product Type
 * @apiSuccess {Int32} number Number of Product Type.
 * @apiSuccessExample Success-Response-Data:
 *  {
 *    4
 *  }
 */



  /**
 * @api {post} /product/type/add Add New Product Type
 * @apiVersion 0.1.0
 * @apiName AddNewProductType
 * @apiGroup Product Type
 * @apiParam {Boolean} status Product Type Status.
 * @apiParam {ObjectId} delete_id Product Type Delete ID.
 * @apiParam {String} type_name Product Type Name.
 * @apiParam {String} type Product Type.
 * @apiParam {Number} parent_id Product Type Parent ID.
 * @apiParam {String} type_code Product Type Code.
 * @apiParam {String} marker_url Product Type Marker URL
 * @apiParam {String} marker_hover_url Product Type Marker Hover URL.
 * @apiParam {String} color_code Product Type Color Code.
 * @apiSuccess {Object} number List of Project Status.
 * @apiParamExample {json} Request-Example:
 *     {
 *          "create_uid" : "b01e6241-0488-40b1-bc53-525050cd6d58",
 *          "create_date" : ISODate("2019-07-27T06:09:00.176Z"),
 *          "write_uid" : "b01e6241-0488-40b1-bc53-525050cd6d58",
 *          "write_date" : ISODate("2019-08-26T08:51:52.848Z"),
 *          "company_id" : "ROOT",
 *          "status" : 0,
 *          "delete_id" : "",
 *          "type_name" : "Bán",
 *          "type" : "",
 *          "parent_id" : "",
 *          "type_code" : "1",
 *          "description" : "",
 *          "marker_url" : "marker_bds_ban.svg",
 *          "marker_hover_url" : "marker_bds_ban_hover.svg",
 *          "color_code" : "#E91B23"
 *    }
 * @apiSuccessExample Success-Response-Data:
 *  [
 *     HTTP/1.1 200 OK
 *  ]
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "status": "false"
 *     }
 */



/**
 * @api {get} /product/type/detail Product Type Detail
 * @apiVersion 0.1.0
 * @apiName DetailProductType
 * @apiGroup Product Type
 * @apiParam {ObjectID} id Product Type ID.
 * @apiParamExample {json} Request-Example:
 *     {
 *       "id": "5d6e56c88e18e6eaf5076069"
 *     } 
 * @apiSuccessExample Success-Response-Data:
 *     {
 *          "_id" : ObjectId("5d6e56c88e18e6eaf5076069"),
 *          "create_uid" : "b01e6241-0488-40b1-bc53-525050cd6d58",
 *          "create_date" : ISODate("2019-07-27T06:09:00.176Z"),
 *          "write_uid" : "b01e6241-0488-40b1-bc53-525050cd6d58",
 *          "write_date" : ISODate("2019-08-26T08:51:52.848Z"),
 *          "company_id" : "ROOT",
 *          "status" : 0,
 *          "delete_id" : "",
 *          "type_name" : "Bán",
 *          "type" : "",
 *          "parent_id" : "",
 *          "type_code" : "1",
 *          "description" : "",
 *          "marker_url" : "marker_bds_ban.svg",
 *          "marker_hover_url" : "marker_bds_ban_hover.svg",
 *          "color_code" : "#E91B23"
 *    }
 */




 /**
 * @api {delete} /product/type/delete Delete Product Type
 * @apiVersion 0.1.0
 * @apiName DeleteProductType
 * @apiGroup Product Type
 * @apiParam {ObjectID} id Product Type ID.
 * @apiParamExample {json} Request-Example:
 *     {
 *       "id": "5d8345efa2178d987366fdef"
 *     } 
 * @apiSuccessExample Success-Response-Data:
 *  [
 *     HTTP/1.1 200 OK
 *  ]
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "status": "false"
 *     }
 */
