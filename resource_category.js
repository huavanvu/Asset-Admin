/**
 * @api {get} /resource/category/list Get List Resource Category
 * @apiVersion 0.1.0
 * @apiName GetListResourceCategory
 * @apiGroup Resource Category
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
 *      create_date: "2019-09-23T01:04:29.670Z",
 *      write_uid: "5d679819325ab70ab0157ce5",
 *      write_date: "2019-10-28T04:50:32.635Z",
 *      company_id: "ROOT",
 *      status: true,
 *      delete_id: null,
 *      parent_id: null,
 *      _id: "5d881da97306f23f8cc1e2d8",
 *      name: "Văn bản pháp luật",
 *      __v: 0
 *  }
 */


  /**
 * @api {get} /resource/category/list_tree Get List Tree Of Resource Category
 * @apiVersion 0.1.0
 * @apiName GetListTreeOfResourceCategory
 * @apiGroup Resource Category
 * @apiSuccess {Object} list List of Resource Category.
 * @apiSuccessExample Success-Response-Data:
 *  [  
 *     {
 *          _id: "5d881da97306f23f8cc1e2d8",
 *          create_date: "2019-09-23T01:04:29.670Z",
 *          parent_id: null,
 *          name: "Văn bản pháp luật",
 *          status: true,
 *          __v: 0,
 *          children: [ ]
 *    }
 *    {...},
 *    {...},
 *    {...} 
 *  ]
 */



   /**
 * @api {post} /resource/category/add Add New Resource Category
 * @apiVersion 0.1.0
 * @apiName AddNewResourceCategory
 * @apiGroup Resource Category
 * @apiParam {Boolean} status Resource Category Status.
 * @apiParam {ObjectId} delete_id Resource Category Delete ID.
 * @apiParam {ObjectId} parent_id Resource Category Parent ID.
 * @apiParam {String} name Resource Category Name.
 * @apiParamExample {json} Request-Example:
 *  {
 *      "_id" : ObjectId("5d881da97306f23f8cc1e2d8"),
 *      "create_date" : ISODate("2019-09-23T01:04:29.670Z"),
 *      "parent_id" : null,
 *      "name" : "Văn bản pháp luật",
 *      "status" : true,
 *      "__v" : 0
 *  }
 * @apiSuccessExample Success-Response-Data:
 *  [
 *     HTTP/1.1 200 OK
 *  ]
 */


/**
 * @api {get} /resource/category/count Count Number Of Resource Category
 * @apiVersion 0.1.0
 * @apiName CountNumberOfResourceCategory
 * @apiGroup Resource Category
 * @apiSuccess {Int32} number Number of Resource Category.
 * @apiSuccessExample Success-Response-Data:
 *  {
 *    6
 *  }
 */



/**
 * @api {get} /resource/category/detail Resource Category Detail
 * @apiVersion 0.1.0
 * @apiName DetailResourceCategory
 * @apiGroup Resource Category
 * @apiParam {ObjectID} id Resource Category ID.
 * @apiParamExample {json} Request-Example:
 *     {
 *       "id": "5d881e177306f23f8cc1e2dd"
 *     } 
 * @apiSuccessExample Success-Response-Data:
 *     {
 *          id: "5d881e177306f23f8cc1e2dd",
 *          create_date: "2019-09-23T01:04:29.670Z",
 *          parent_id: null,
 *          name: "Mẫu hợp đồng",
 *          status: true,
 *          __v: 0,
 *          children: [ ]
 *     }
 * @apiError MissingResourceCategoryID The <code>id</code> of the Resource Category was missing.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Missing resource category ID"
 *     }
 */



 /**
 * @api {put} /resource/category/edit Edit Resource Category
 * @apiVersion 0.1.0
 * @apiName EditResourceCategory
 * @apiGroup Resource Category
 * @apiParam {ObjectID} id Resource Category ID.
 * @apiParam {String} name Resource Category Name.
 * @apiParamExample {json} Request-Example:
 *     {
 *       "id": "5d881e177306f23f8cc1e2dd",
 *       "name": "Mẫu hợp đồng mua bán nhà đất"
 *     } 
 * @apiSuccessExample Success-Response-Data:
 *  [
 *     HTTP/1.1 200 OK
 *  ]
 * @apiError IdIsNull The <code>id</code> of the Resource Category was null.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "ID is null"
 *     }
 */


 /**
 * @api {delete} /resource/category/delete Delete Resource Category
 * @apiVersion 0.1.0
 * @apiName DeleteResourceCategory
 * @apiGroup Resource Category
 * @apiParam {ObjectID} id Resource Category ID.
 * @apiParamExample {json} Request-Example:
 *     {
 *       "id": "5d881e177306f23f8cc1e2dd"
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