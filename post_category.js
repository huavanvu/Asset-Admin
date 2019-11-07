/**
 * @api {get} /post/category/list_tree Get List Tree Of Post Category
 * @apiVersion 0.1.0
 * @apiName GetListTreeOfPostCategory
 * @apiGroup Post Category
 * @apiSuccess {Object} list List of Post Category.
 * @apiSuccessExample Success-Response-Data:
 *  [  
 *     {
 *       "_id": "5d809d260b8fca1be4d8efaa",
 *       "create_uid": "5d679819325ab70ab0157ce5",
 *       "create_date": "2019-09-17T08:43:26.895Z",
 *       "write_uid": "5d679819325ab70ab0157ce5",
 *       "write_date": "2019-09-17T08:43:26.895Z",
 *       "company_id": "ROOT",
 *       "status": true,
 *       "delete_id": null,
 *       "description": "",
 *       "keyword": "",
 *       "tag": "",
 *       "publish": true,
 *       "name": "Kiến thức kinh nghiệm",
 *       "url_name": "kien-thuc-kinh-nghiem",
 *       "sequence": 18,
 *       "parent_id": null,
 *       "__v": 0,
 *       "children": [
 *           {
 *               "_id": "5d809e070ba8a018d4b92d20",
 *               "create_uid": "5d679819325ab70ab0157ce5",
 *               "create_date": "2019-09-17T08:48:52.547Z",
 *               "write_uid": "5d679819325ab70ab0157ce5",
 *               "write_date": "2019-09-17T08:48:52.547Z",
 *               "company_id": "ROOT",
 *               "status": true,
 *               "delete_id": null,
 *               "description": "",
 *               "keyword": "",
 *               "tag": "",
 *               "publish": true,
 *               "name": "Cách bán nhà",
 *               "url_name": "cach-ban-nha",
 *               "sequence": 19,
 *               "parent_id": "5d809d260b8fca1be4d8efaa",
 *               "__v": 0
 *           },
 *           {...},
 *           {...},
 *           {...},
 *       ]
 *     } 
 *  ]
 */


 /**
 * @api {get} /post/category/list List Post Category
 * @apiVersion 0.1.0
 * @apiName ListPostCategory
 * @apiGroup Post Category
 * @apiParam {Int32} page Number of page.
 * @apiParam {Int32} limit Number of items in one page.
 * @apiParamExample Example:
 *     {
 *       "page": 2,
 *       "limit": 10
 *     }
 * @apiSuccessExample Success-Response-Data:
 *  [
 *     {
 *       "create_uid": "5d679819325ab70ab0157ce5",
 *       "create_date": "2019-09-17T08:49:38.228Z",
 *       "write_uid": "5d679819325ab70ab0157ce5",
 *       "write_date": "2019-09-17T08:49:38.228Z",
 *       "company_id": "ROOT",
 *       "status": true,
 *       "delete_id": null,
 *       "description": "",
 *       "keyword": "",
 *       "tag": "",
 *       "publish": true,
 *       "_id": "5d809eb9dc23f01c7c85a0a6",
 *       "name": "Quy trình - form mẫu",
 *       "url_name": "quy-trinh-form-mau",
 *       "sequence": 30,
 *       "parent_id": {
 *           "create_uid": "5d679819325ab70ab0157ce5",
 *           "create_date": "2019-09-17T08:43:26.895Z",
 *           "write_uid": "5d679819325ab70ab0157ce5",
 *           "write_date": "2019-09-17T08:43:26.895Z",
 *           "company_id": "ROOT",
 *           "status": true,
 *           "delete_id": null,
 *           "description": "",
 *           "keyword": "",
 *           "tag": "",
 *           "publish": true,
 *           "_id": "5d809d260b8fca1be4d8efaa",
 *           "name": "Kiến thức kinh nghiệm",
 *           "url_name": "kien-thuc-kinh-nghiem",
 *           "sequence": 18,
 *           "parent_id": null,
 *           "__v": 0
 *       },
 *       "__v": 0
 *     }
 *  ]
 */

 /**
 * @api {get} /post/category/count Count Post Category
 * @apiVersion 0.1.0
 * @apiName CountPostCategory
 * @apiGroup Post Category
 * @apiSuccessExample Success-Response-Data:
 *  {
 *      25
 *  }
 */

  /**
 * @api {post} /post/category/add Add Post Category
 * @apiVersion 0.1.0
 * @apiName AddPostCategory
 * @apiGroup Post Category
 * @apiParam {Boolean} status Post Category.
 * @apiParam {ObjectId} delete_id Post Category Delete ID.
 * @apiParam {String} name Post Category Name.
 * @apiParam {ObjectId} parent_id Post Category Parent ID.
 * @apiParam {String} type Post Category Type.
 * @apiParam {Number} sequence Post Category Sequence.
 * @apiParam {String} keyword Post Category Keyword.
 * @apiParam {String} description Post Category Description.
 * @apiParam {String} url_name Post Category URL Name.
 * @apiParam {String} tag Post Category Tag.
 * @apiParam {Boolean} publish Post Category Publish.
 * @apiParamExample {json} Request-Example:
 *    {
 *      "status": true,
 *      "data": {
 *          "create_uid": "5d679819325ab70ab0157ce5",
 *          "create_date": "2019-10-04T01:28:33.332Z",
 *          "write_uid": "5d679819325ab70ab0157ce5",
 *          "write_date": "2019-10-04T01:28:33.332Z",
 *          "company_id": "ROOT",
 *          "status": true,
 *          "delete_id": null,
 *          "description": "",
 *          "keyword": "",
 *          "tag": "",
 *          "publish": true,
 *          "_id": "5d96c04bd752d617ec7bed89",
 *          "name": "Điểm tin",
 *          "url_name": "diem-tin",
 *          "parent_id": "5d6b1efb482f80200ccbefa7",
 *          "sequence": 45,
 *          "__v": 0
 *      }
 *   }
 * @apiSuccessExample Success-Response-Data:
 *  [
 *     HTTP/1.1 200 OK
 *  ]
 */

 /**
 * @api {get} /post/category/detail Post Category Detail
 * @apiVersion 0.1.0
 * @apiName DetailPostCategory
 * @apiGroup Post Category
 * @apiParam {ObjectID} id Post Category ID.
 * @apiParamExample {json} Request-Example:
 *     {
 *       "id": "5d809d260b8fca1be4d8efaa"
 *     } 
 * @apiSuccessExample Success-Response-Data:
 *     {
 *          _id: "5d809d260b8fca1be4d8efaa",
 *          create_uid: "5d679819325ab70ab0157ce5",
 *          create_date: "2019-09-17T08:43:26.895Z",
 *          write_uid: "5d679819325ab70ab0157ce5",
 *          write_date: "2019-09-17T08:43:26.895Z",
 *          company_id: "ROOT",
 *          status: true,
 *          delete_id: null,
 *          description: "",
 *          keyword: "",
 *          tag: "",
 *          publish: true,
 *          name: "Kiến thức kinh nghiệm",
 *          url_name: "kien-thuc-kinh-nghiem",
 *          sequence: 18,
 *          parent_id: null,
 *          __v: 0,
 *          children: [
 *              {
 *                  _id: "5d809e070ba8a018d4b92d20",
 *                  create_uid: "5d679819325ab70ab0157ce5",
 *                  create_date: "2019-09-17T08:48:52.547Z",
 *                  write_uid: "5d679819325ab70ab0157ce5",
 *                  write_date: "2019-09-17T08:48:52.547Z",
 *                  company_id: "ROOT",
 *                  status: true,
 *                  delete_id: null,
 *                  description: "",
 *                  keyword: "",
 *                  tag: "",
 *                  publish: true,
 *                  name: "Cách bán nhà",
 *                  url_name: "cach-ban-nha",
 *                  sequence: 19,
 *                  parent_id: "5d809d260b8fca1be4d8efaa",
 *                  __v: 0
 *              },
 *              {},
 *              {},
 *              {}
 *          ]
 *    }
 */



 /**
 * @api {put} /post/category/edit Edit Post Category
 * @apiVersion 0.1.0
 * @apiName EditPostCategory
 * @apiGroup Post Category
 * @apiParam {ObjectID} id Post Category ID.
 * @apiParam {String} name Post Category Name.
 * @apiParamExample {json} Request-Example:
 *     {
 *       "id": "5d809d260b8fca1be4d8efaa",
 *       "name": "Kiến thức kinh nghiệm và đời sống"
 *     } 
 * @apiSuccessExample Success-Response-Data:
 *  [
 *     HTTP/1.1 200 OK
 *  ]
 */

/**
 * @api {delete} /post/category/delete Delete Post Category
 * @apiVersion 0.1.0
 * @apiName DeletePostCategory
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