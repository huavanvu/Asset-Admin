/**
 * @api {get} /company/category/list Get List Company Category
 * @apiVersion 0.1.0
 * @apiName GetListCompanyCategory
 * @apiGroup Company Category
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
 *      create_date: "2019-10-23T03:56:36.202Z",
 *      write_uid: "5d679819325ab70ab0157ce5",
 *      write_date: "2019-10-23T03:56:36.202Z",
 *      company_id: "ROOT",
 *      status: true,
 *      delete_id: null,
 *      description: "",
 *      keyword: "",
 *      _id: "5dafd01513818c28e0916314",
 *      code: "US",
 *      name: "Cộng tác viên",
 *      __v: 0
 *  }
 */



 /**
 * @api {get} /company/category/list_tree Get List Tree Of Company Category
 * @apiVersion 0.1.0
 * @apiName GetListTreeOfCompanyCategory
 * @apiGroup Company Category
 * @apiSuccess {Object} list List of Company Category.
 * @apiSuccessExample Success-Response-Data:
 *  [  
 *     {
 *          _id: "5dafd01513818c28e0916314",
 *          create_uid: "5d679819325ab70ab0157ce5",
 *          create_date: "2019-10-23T03:56:36.202Z",
 *          write_uid: "5d679819325ab70ab0157ce5",
 *          write_date: "2019-10-23T03:56:36.202Z",
 *          company_id: "ROOT",
 *          status: true,
 *          delete_id: null,
 *          description: "",
 *          keyword: "",
 *          code: "US",
 *          name: "Cộng tác viên",
 *          __v: 0,
 *          children: [ ]
 *    }
 *    {...},
 *    {...},
 *    {...} 
 *  ]
 */


   /**
 * @api {get} /company/category/count Count Number Of Company Category
 * @apiVersion 0.1.0
 * @apiName CountNumberOfCompanyCategory
 * @apiGroup Company Category
 * @apiSuccess {Int32} number Number of Company Category.
 * @apiSuccessExample Success-Response-Data:
 *  {
 *    10
 *  }
 */


  /**
 * @api {post} /company/category/add Add New Company Category
 * @apiVersion 0.1.0
 * @apiName AddNewCompanyCategory
 * @apiGroup Company Category
 * @apiParam {Boolean} status Company Category Status.
 * @apiParam {ObjectId} delete_id Company Category Delete ID.
 * @apiParam {ObjectId} parent_id Company Category Parent ID.
 * @apiParam {String} name Company Category Name.
 * @apiParam {String} code Company Category Code.
 * @apiParam {String} description Company Category Description.
 * @apiParam {Number} sequence Company Category Sequence.
 * @apiParam {String} url_name Company Category URL Name.
 * @apiParam {String} type Company Category Type.
 * @apiParam {String} keyword Company Category Keyword.
 * @apiParamExample {json} Request-Example:
 *  {
 *      "_id" : ObjectId("5dafd01513818c28e0916314"),
 *      "create_uid" : ObjectId("5d679819325ab70ab0157ce5"),
 *      "create_date" : ISODate("2019-10-23T03:56:36.202Z"),
 *      "write_uid" : ObjectId("5d679819325ab70ab0157ce5"),
 *      "write_date" : ISODate("2019-10-23T03:56:36.202Z"),
 *      "company_id" : "ROOT",
 *      "status" : true,
 *      "delete_id" : null,
 *      "description" : "",
 *      "keyword" : "",
 *      "code" : "US",
 *      "name" : "Cộng tác viên",
 *      "__v" : 0
 *  }
 * @apiSuccessExample Success-Response-Data:
 *  [
 *     HTTP/1.1 200 OK
 *  ]
 */


  /**
 * @api {get} /company/category/detail Company Category Detail
 * @apiVersion 0.1.0
 * @apiName DetailCompanyCategory
 * @apiGroup Company Category
 * @apiParam {ObjectID} id Company Category ID.
 * @apiParamExample {json} Request-Example:
 *     {
 *       "id": "5dafd01513818c28e0916317"
 *     } 
 * @apiSuccessExample Success-Response-Data:
 *     {
 *          _id: "5dafd01513818c28e0916317",
 *          create_uid: "5d679819325ab70ab0157ce5",
 *          create_date: "2019-10-23T03:56:36.202Z",
 *          write_uid: "5d679819325ab70ab0157ce5",
 *          write_date: "2019-10-23T03:56:36.202Z",
 *          company_id: "ROOT",
 *          status: true,
 *          delete_id: null,
 *          description: "",
 *          keyword: "",
 *          code: "AOZ",
 *          name: "Đại lý độc quyền",
 *          __v: 0,
 *          children: [ ]
 *     }
 * @apiError MissingCompanyCategoryID The <code>id</code> of the Company Category was missing.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Missing company category ID"
 *     }
 */




/**
 * @api {delete} /company/category/delete Delete Company Category
 * @apiVersion 0.1.0
 * @apiName DeleteCompanyCategory
 * @apiGroup Company Category
 * @apiParam {ObjectID} id Company Category ID.
 * @apiParamExample {json} Request-Example:
 *     {
 *       "id": "5dafd01513818c28e0916314"
 *     } 
 * @apiSuccessExample Success-Response-Data:
 *  [
 *     HTTP/1.1 200 OK
 *  ]
 */



/**
 * @api {put} /company/category/edit Edit Company Category
 * @apiVersion 0.1.0
 * @apiName EditCompanyCategory
 * @apiGroup Company Category
 * @apiParam {ObjectID} id Company Category ID.
 * @apiParam {String} name Company Category Name.
 * @apiParamExample {json} Request-Example:
 *     {
 *       "id": "5dafd01513818c28e0916314",
 *       "name": "Cộng tác viên"
 *     } 
 * @apiSuccessExample Success-Response-Data:
 *  [
 *     HTTP/1.1 200 OK
 *  ]
 * @apiError IdIsNull The <code>id</code> of the Company Category was null.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "ID is null"
 *     }
 */