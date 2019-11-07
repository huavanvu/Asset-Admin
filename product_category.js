/**
 * @api {get} /product/category/list Get List Product Category
 * @apiVersion 0.1.0
 * @apiName GetListProductCategory
 * @apiGroup Product Category
 * @apiParam {Int32} page Number of page.
 * @apiParam {Int32} limit Number of items in one page .
 * @apiParamExample {Int32} Example:
 *     {
 *       "page": 1,
 *       "limit": 1
 *     }
 * @apiSuccess {Object} list List of Recruit Category.
 * @apiSuccessExample Success-Response:
 *  [
 *    {
 *          company_id: "ROOT",
 *          attribute: [ ],
 *          _id: "5db2c448f835f22804d62d33",
 *          create_uid: "b01e6241-0488-40b1-bc53-525050cd6d58",
 *          create_date: "2019-07-10T13:19:36.294Z",
 *          write_uid: "b01e6241-0488-40b1-bc53-525050cd6d58",
 *          write_date: "2019-07-13T10:14:46.369Z",
 *          status: true,
 *          delete_id: "",
 *          parent_id: "",
 *          category_name: "CĂN HỘ CHUNG CƯ",
 *          type: "",
 *          code: "APART",
 *          type_id: "",
 *          start_date: null,
 *          end_date: null,
 *          contact_name: "",
 *          tel: "",
 *          email: "",
 *          description: "",
 *          sequence: "1",
 *          keywords: "",
 *          __v: 0
 *    }
 *  ]
 */



 /**
 * @api {get} /product/category/count Count Number Of Product Category
 * @apiVersion 0.1.0
 * @apiName CountNumberOfProductCategory
 * @apiGroup Product Category
 * @apiSuccess {Int32} number Number of Product Category.
 * @apiSuccessExample Success-Response-Data:
 *  {
 *    13
 *  }
 */



/**
 * @api {get} /product/category/detail Product Category Detail
 * @apiVersion 0.1.0
 * @apiName DetailProductCategory
 * @apiGroup Product Category
 * @apiParam {ObjectID} id Product Category ID.
 * @apiParamExample {json} Request-Example:
 *     {
 *       "id": "5db2c448f835f22804d62d33"
 *     } 
 * @apiSuccessExample Success-Response-Data:
 *     {
 *          company_id: "ROOT",
 *          attribute: [ ],
 *          _id: "5db2c448f835f22804d62d33",
 *          create_uid: "b01e6241-0488-40b1-bc53-525050cd6d58",
 *          create_date: "2019-07-10T13:19:36.294Z",
 *          write_uid: "b01e6241-0488-40b1-bc53-525050cd6d58",
 *          write_date: "2019-07-13T10:14:46.369Z",
 *          status: true,
 *          delete_id: "",
 *          parent_id: "",
 *          category_name: "CĂN HỘ CHUNG CƯ",
 *          type: "",
 *          code: "APART",
 *          type_id: "",
 *          start_date: null,
 *          end_date: null,
 *          contact_name: "",
 *          tel: "",
 *          email: "",
 *          description: "",
 *          sequence: "1",
 *          keywords: "",
 *          __v: 0
 *     }
 */



/**
 * @api {put} /product/category/edit Edit Product Category
 * @apiVersion 0.1.0
 * @apiName EditProductCategory
 * @apiGroup Product Category
 * @apiParam {ObjectID} id Product Category ID.
 * @apiParam {String} name Product Category Name.
 * @apiParamExample {json} Request-Example:
 *     {
 *       "id": "5db2c448f835f22804d62d33",
 *       "category_name": "CĂN HỘ CHUNG CƯ NEW CITY"
 *     } 
 * @apiSuccessExample Success-Response-Data:
 *  [
 *     HTTP/1.1 200 OK
 *  ]
 * @apiError IdIsNull The <code>id</code> of Product Category is null.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "status": "false",
 *       "error": "ID is null"
 *     }
 */



 /**
 * @api {delete} /product/category/delete Delete Product Category
 * @apiVersion 0.1.0
 * @apiName DeleteProductCategory
 * @apiGroup Product Category
 * @apiParam {ObjectID} id Product Category ID.
 * @apiParamExample {json} Request-Example:
 *     {
 *       "id": "5db2c448f835f22804d62d33"
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




/**
 * @api {post} /product/category/add Add Product Category
 * @apiVersion 0.1.0
 * @apiName AddProductCategory
 * @apiGroup Product Category
 * @apiParam {Boolean} status Product Category.
 * @apiParam {ObjectId} delete_id Product Category Delete ID.
 * @apiParam {String} category_name Product Category Name.
 * @apiParam {String} code Product Category Code.
 * @apiParam {Number} sequence Product Category Sequence.
 * @apiParam {String} keyword Product Category Keyword.
 * @apiParam {String} description Product Category Description.
 * @apiParam {String} type Product Category Type.
 * @apiParam {String} type_id Product Category Type ID.
 * @apiParam {String} start_date Product Category Start Date.
 * @apiParam {String} end_date Product Category End Date.
 * @apiParam {String} contact_name Product Category Contact Name.
 * @apiParam {String} tel Product Category Telephone Number.
 * @apiParam {String} email Product Category Email.
 * @apiParam {Array} attribute Product Category Attribute.
 * @apiParamExample {json} Request-Example:
 *    {
 *          company_id: "ROOT",
 *          attribute: [ ],
 *          create_uid: "b01e6241-0488-40b1-bc53-525050cd6d58",
 *          create_date: "2019-07-10T13:19:36.294Z",
 *          write_uid: "b01e6241-0488-40b1-bc53-525050cd6d58",
 *          write_date: "2019-07-13T10:14:46.369Z",
 *          status: true,
 *          delete_id: "",
 *          parent_id: "",
 *          category_name: "CĂN HỘ CHUNG CƯ NEW",
 *          type: "",
 *          code: "APARTMENT",
 *          type_id: "",
 *          start_date: null,
 *          end_date: null,
 *          contact_name: "",
 *          tel: "",
 *          email: "",
 *          description: "",
 *          sequence: "1",
 *          keywords: "",
 *          __v: 0
 *   }
 * @apiSuccessExample Success-Response-Data:
 *  [
 *     HTTP/1.1 200 OK
 *  ]
 */
