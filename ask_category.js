/**
 * @api {get} /ask/category/list Get List Ask Category
 * @apiVersion 0.1.0
 * @apiName GetListAskCategory
 * @apiGroup Ask Category
 * @apiParam {Int32} page Number of page.
 * @apiParam {Int32} limit Number of items in one page .
 * @apiParamExample {Int32} Example:
 *     {
 *       "page": 1,
 *       "limit": 1
 *     }
 * @apiSuccess {Object} list List of Recruit Category.
 * @apiSuccessExample Success-Response:
 *  {
 *      create_uid: "5d679819325ab70ab0157ce5",
 *      create_date: "2019-10-14T07:37:15.584Z",
 *      write_uid: null,
 *      write_date: null,
 *      company_id: "ROOT",
 *      status: true,
 *      delete_id: null,
 *      parent_id: null,
 *      sequence: 2,
 *      _id: "5d7f38d6d76bcb1fe8742476",
 *      name: "Pháp lý BĐS",
 *      code: "ASK_LEGAL",
 *      __v: 0,
 *      url_name: "phap-ly-bds"
 * }
 */



 /**
 * @api {get} /ask/category/list_tree Get List Tree Of Ask Category
 * @apiVersion 0.1.0
 * @apiName GetListTreeOfAskCategory
 * @apiGroup Ask Category
 * @apiSuccess {Object} list List of Ask Category.
 * @apiSuccessExample Success-Response-Data:
 *  [  
 *     {
 *       _id: "5d7f38d6d76bcb1fe8742476",
 *       parent_id: null,
 *       name: "Pháp lý BĐS",
 *       code: "ASK_LEGAL",
 *       create_uid: "5d679819325ab70ab0157ce5",
 *       sequence: 2,
 *       __v: 0,
 *       status: true,
 *       url_name: "phap-ly-bds",
 *       children: [ ]
 *     },
 *    {}
 * ]
 */



  /**
 * @api {get} /ask/category/count Count Number Of Ask Category
 * @apiVersion 0.1.0
 * @apiName CountNumberOfAskCategory
 * @apiGroup Ask Category
 * @apiSuccess {Int32} number Number of Ask Category.
 * @apiSuccessExample Success-Response-Data:
 *  {
 *    2
 *  }
 */



  /**
 * @api {post} /ask/category/add Add New Ask Category
 * @apiVersion 0.1.0
 * @apiName AddNewAskCategory
 * @apiGroup Ask Category
 * @apiParam {Boolean} status Ask Category Status.
 * @apiParam {ObjectId} delete_id Ask Category Delete ID.
 * @apiParam {ObjectId} parent_id Ask Category Parent ID.
 * @apiParam {String} url_name Ask Category URL Name.
 * @apiParam {String} name Ask Category Name.
 * @apiParam {String} code Ask Category Code.
 * @apiParam {Number} sequence Ask Category Sequence.
 * @apiParamExample {json} Request-Example:
 *  {
 *    "status": true,
 *    "data": {
 *        "create_uid": "5d679819325ab70ab0157ce5",
 *        "create_date": "2019-10-11T01:56:35.189Z",
 *        "write_uid": "5d679819325ab70ab0157ce5",
 *        "write_date": "2019-10-11T01:56:35.189Z",
 *        "company_id": "ROOT",
 *        "status": true,
 *        "delete_id": null,
 *        "parent_id": null,
 *        "sequence": 0,
 *        "name": "Pháp lý Bất Động Sản",
 *        "url_name": "phap-ly-bat-dong-san",
 *        "code": "ASK_LEGAL",
 *        "__v": 0
 *    }
 *  }
 * @apiSuccessExample Success-Response-Data:
 *  [
 *     HTTP/1.1 200 OK
 *  ]
 */



 /**
 * @api {get} /ask/category/detail Ask Category Detail
 * @apiVersion 0.1.0
 * @apiName DetailAskCategory
 * @apiGroup Ask Category
 * @apiParam {ObjectID} id Ask Category ID.
 * @apiParamExample {json} Request-Example:
 *     {
 *       "id": "5d7f38d6d76bcb1fe8742476"
 *     } 
 * @apiSuccessExample Success-Response-Data:
 *     {
 *         _id: "5d7f38d6d76bcb1fe8742476",
 *         parent_id: null,
 *         name: "Pháp lý BĐS",
 *         code: "ASK_LEGAL",
 *         create_uid: "5d679819325ab70ab0157ce5",
 *         sequence: 2,
 *         __v: 0,
 *         status: true,
 *         url_name: "phap-ly-bds",
 *         children: [ ]
 *     }
 */



   /**
 * @api {delete} /ask/category/delete Delete Ask Category
 * @apiVersion 0.1.0
 * @apiName DeleteAskCategory
 * @apiGroup Ask Category
 * @apiParam {ObjectID} id Ask Category ID.
 * @apiParamExample {json} Request-Example:
 *     {
 *       "id": "5d7f38d6d76bcb1fe8742476"
 *     } 
 * @apiSuccessExample Success-Response-Data:
 *  [
 *     HTTP/1.1 200 OK
 *  ]
 */


   /**
 * @api {put} /ask/category/edit Edit Ask Category
 * @apiVersion 0.1.0
 * @apiName EditAskCategory
 * @apiGroup Ask Category
 * @apiParam {ObjectID} id Ask Category ID.
 * @apiParam {String} name Ask Category Name.
 * @apiParamExample {json} Request-Example:
 *     {
 *       "id": "5d970e9203ca2d152823edcd",
 *       "name": "Danh Sách Khách hàng của Asset năm 2019"
 *     } 
 * @apiSuccessExample Success-Response-Data:
 *  [
 *     HTTP/1.1 200 OK
 *  ]
 */
