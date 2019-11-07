/**
 * @api {get} /partner/category/list Get List Partner Category
 * @apiVersion 0.1.0
 * @apiName GetListPartnerCategory
 * @apiGroup Partner Category
 * @apiParam {Int32} page Number of page.
 * @apiParam {Int32} limit Number of items in one page .
 * @apiParamExample {Int32} Example:
 *     {
 *       "page": 1,
 *       "limit": 1
 *     }
 * @apiSuccess {Object} list List of Partner Category.
 * @apiSuccessExample Success-Response:
 *  {
 *      create_uid: "5d679819325ab70ab0157ce5",
 *      create_date: "2019-10-06T07:35:36.819Z",
 *      write_uid: "5d679819325ab70ab0157ce5",
 *      write_date: "2019-10-06T07:35:36.819Z",
 *      company_id: "ROOT",
 *      status: true,
 *      delete_id: null,
 *      description: "",
 *      sequence: 0,
 *      keyword: "",
 *      _id: "5d99b289c56de53b5878bcaa",
 *      name: "Công ty",
 *      url_name: "cong-ty",
 *      parent_id: null,
 *      code: "COMPANY",
 *      __v: 0
 *  }
 */

 
 /**
 * @api {get} /partner/category/list_tree Get List Tree Of Partner Category
 * @apiVersion 0.1.0
 * @apiName GetListTreeOfPartnerCategory
 * @apiGroup Partner Category
 * @apiSuccess {Object} list List of Partner Category.
 * @apiSuccessExample Success-Response-Data:
 *  [  
 *     {
 *          create_uid: "5d679819325ab70ab0157ce5",
 *          create_date: "2019-10-06T07:35:36.819Z",
 *          write_uid: "5d679819325ab70ab0157ce5",
 *          write_date: "2019-10-06T07:35:36.819Z",
 *          company_id: "ROOT",
 *          status: true,
 *          delete_id: null,
 *          description: "",
 *          sequence: 0,
 *          keyword: "",
 *          _id: "5d99b289c56de53b5878bcaa",
 *          name: "Công ty",
 *          url_name: "cong-ty",
 *          parent_id: null,
 *          code: "COMPANY",
 *          __v: 0,
 *          children: [ ]
 *          {}
 *    } 
 *  ]
 */


/**
 * @api {get} /partner/category/count Count Number Of Partner Category
 * @apiVersion 0.1.0
 * @apiName CountNumberOfPartnerCategory
 * @apiGroup Partner Category
 * @apiSuccess {Int32} number Number of Partner Category.
 * @apiSuccessExample Success-Response-Data:
 *  {
 *    1
 *  }
 */


/**
 * @api {post} /partner/category/add Add New Partner Category
 * @apiVersion 0.1.0
 * @apiName AddNewPartnerCategory
 * @apiGroup Partner Category
 * @apiParam {Boolean} status Partner Category Status.
 * @apiParam {ObjectId} delete_id Partner Category Delete ID.
 * @apiParam {ObjectId} parent_id Partner Category Parent ID.
 * @apiParam {String} name Partner Category Name.
 * @apiParam {String} code Partner Category Code.
 * @apiParam {String} description Partner Category Description.
 * @apiParam {Number} sequence Partner Category Sequence.
 * @apiParam {String} url_name Partner Category URL Name.
 * @apiParam {String} type Partner Category Type.
 * @apiParam {String} keyword Partner Category Keyword.
 * @apiParamExample {json} Request-Example:
 *  {
 *      "_id" : ObjectId("5d99b289c56de53b5878bcaa"),
 *      "create_uid" : ObjectId("5d679819325ab70ab0157ce5"),
 *      "create_date" : ISODate("2019-10-06T07:35:36.819Z"),
 *      "write_uid" : ObjectId("5d679819325ab70ab0157ce5"),
 *      "write_date" : ISODate("2019-10-06T07:35:36.819Z"),
 *      "company_id" : "ROOT",
 *      "status" : true,
 *      "delete_id" : null,
 *      "description" : "",
 *      "sequence" : 0,
 *      "keyword" : "",
 *      "name" : "Công ty",
 *      "url_name" : "cong-ty",
 *      "parent_id" : null,
 *      "code" : "COMPANY",
 *      "__v" : 0
 *  }
 * @apiSuccessExample Success-Response-Data:
 *  [
 *     HTTP/1.1 200 OK
 *  ]
 */


   /**
 * @api {get} /partner/category/detail Partner Category Detail
 * @apiVersion 0.1.0
 * @apiName DetailPartnerCategory
 * @apiGroup Partner Category
 * @apiParam {ObjectID} id Partner Category ID.
 * @apiParamExample {json} Request-Example:
 *     {
 *       "id": "5d9998fec1782d3a3cd58814"
 *     } 
 * @apiSuccessExample Success-Response-Data:
 *     {
 *          _id: "5d99b289c56de53b5878bcaa",
 *          create_uid: "5d679819325ab70ab0157ce5",
 *          create_date: "2019-10-06T07:35:36.819Z",
 *          write_uid: "5d679819325ab70ab0157ce5",
 *          write_date: "2019-10-06T07:35:36.819Z",
 *          company_id: "ROOT",
 *          status: true,
 *          delete_id: null,
 *          description: "",
 *          sequence: 0,
 *          keyword: "",
 *          name: "Công ty",
 *          url_name: "cong-ty",
 *          parent_id: null,
 *          code: "COMPANY",
 *          __v: 0,
 *          children: [ ]
 *     }
 * @apiError MissingPartnerCategoryID The <code>id</code> of the Partner Category was missing.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Missing company category ID"
 *     }
 */



 /**
 * @api {delete} /partner/category/delete Delete Partner Category
 * @apiVersion 0.1.0
 * @apiName DeletePartnerCategory
 * @apiGroup Partner Category
 * @apiParam {ObjectID} id Partner Category ID.
 * @apiParamExample {json} Request-Example:
 *     {
 *       "id": "5d9998fec1782d3a3cd58814"
 *     } 
 * @apiSuccessExample Success-Response-Data:
 *  [
 *     HTTP/1.1 200 OK
 *  ]
 */



 /**
 * @api {put} /partner/category/edit Edit Partner Category
 * @apiVersion 0.1.0
 * @apiName EditPartnerCategory
 * @apiGroup Partner Category
 * @apiParam {ObjectID} id Partner Category ID.
 * @apiParam {String} name Partner Category Name.
 * @apiParamExample {json} Request-Example:
 *     {
 *       "id": "5d9998fec1782d3a3cd58814",
 *       "name": "Công ty thiết kế"
 *     } 
 * @apiSuccessExample Success-Response-Data:
 *  [
 *     HTTP/1.1 200 OK
 *  ]
 * @apiError IdIsNull The <code>id</code> of the Partner Category was null.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "ID is null"
 *     }
 */