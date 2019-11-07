 /**
 * @api {get} /project/category/list List Project Category
 * @apiVersion 0.1.0
 * @apiName ListProjectCategory
 * @apiGroup Project Category
 * @apiSuccessExample Success-Response-Data:
 *  [
 *     {
 *       "create_uid": "5d679819325ab70ab0157ce5",
 *       "create_date": "2019-08-23T14:00:05.160Z",
 *       "write_uid": "5d679819325ab70ab0157ce5",
 *       "write_date": "2019-08-23T14:00:05.160Z",
 *       "company_id": "ROOT",
 *       "status": false,
 *       "delete_id": null,
 *       "parent_id": null,
 *       "_id": "5d8345efa2178d987366fdef",
 *       "category_name": "DỰ ÁN PHỨC HỢP",
 *       "category_code": "MPROJ",
 *       "sequence": 4,
 *       "keyworks": "",
 *       "description": ""
 *    }
 *  ]
 */

/**
 * @api {get} /project/category/count Count Project Category
 * @apiVersion 0.1.0
 * @apiName CountProjectCategory
 * @apiGroup Project Category
 * @apiSuccessExample Success-Response-Data:
 *  {
 *      4
 *  }
 */

 /**
 * @api {post} /project/category/add Add Project Category
 * @apiVersion 0.1.0
 * @apiName AddProjectCategory
 * @apiGroup Project Category
 * @apiParam {Boolean} status Project Category Status.
 * @apiParam {ObjectId} delete_id Project Category Delete ID.
 * @apiParam {String} category_name Project Category Name.
 * @apiParam {ObjectId} parent_id Project Category Parent ID.
 * @apiParam {String} category_code Project Category Code.
 * @apiParam {Number} sequence Project Category Sequence.
 * @apiParam {String} keyword Project Category Keyword.
 * @apiParam {String} description Project Category Description.
 * @apiParamExample {json} Request-Example:
 *    {
 *      "status": true,
 *      "delete_id": "",
 *      "category_name": "DỰ ÁN PHỨC HỢP",
 *      "parent_id": null,
 *      "category_code": "MPROJ",
 *      "sequence": 4.0,
 *      "keyword": "",
 *      "description": ""
 *    } 
 * @apiSuccessExample Success-Response-Data:
 *  [
 *     HTTP/1.1 200 OK
 *  ]
 */


 /**
 * @api {get} /project/category/detail Project Category Detail
 * @apiVersion 0.1.0
 * @apiName DetailProjectCategory
 * @apiGroup Project Category
 * @apiParam {ObjectID} id Project Category ID.
 * @apiParamExample {json} Request-Example:
 *     {
 *       "id": "5d8345efa2178d987366fdef"
 *     } 
 * @apiSuccessExample Success-Response-Data:
 *     {
 *      "create_uid": "5d679819325ab70ab0157ce5",
 *      "create_date": "2019-07-10T13:01:26.263Z",
 *      "write_uid": "5d679819325ab70ab0157ce5",
 *      "write_date": "2019-09-03T02:08:44.647Z",
 *      "company_id": "ROOT",
 *      "status": false,
 *      "delete_id": null,
 *      "parent_id": null,
 *      "_id": "5d8345fca2178d987366ff40",
 *      "category_name": "DỰ ÁN CHUNG CƯ",
 *      "category_code": "APROJ",
 *      "sequence": 1,
 *      "keyworks": "",
 *      "description": ""
 *     }
 */

  /**
 * @api {put} /project/category/edit Edit Project Category
 * @apiVersion 0.1.0
 * @apiName EditProjectCategory
 * @apiGroup Project Category
 * @apiParam {ObjectID} id Project Category ID.
 * @apiParam {String} cateogry_name Project Category Name.
 * @apiParamExample {json} Request-Example:
 *     {
 *       "id": "5d8345efa2178d987366fdef",
 *       "category_name": "DỰ ÁN PHỨC HỢP"
 *     } 
 * @apiSuccessExample Success-Response-Data:
 *  [
 *     HTTP/1.1 200 OK
 *  ]
 */

 /**
 * @api {delete} /project/category/delete Delete Project Category
 * @apiVersion 0.1.0
 * @apiName DeleteProjectCategory
 * @apiGroup Project Category
 * @apiParam {ObjectID} id Project Category ID.
 * @apiParamExample {json} Request-Example:
 *     {
 *       "id": "5d8345efa2178d987366fdef"
 *     } 
 * @apiSuccessExample Success-Response-Data:
 *  [
 *     HTTP/1.1 200 OK
 *  ]
 */