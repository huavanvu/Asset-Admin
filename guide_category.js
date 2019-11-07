/**
 * @api {get} /guide/category/list Get List Guide Category
 * @apiVersion 0.1.0
 * @apiName GetListGuideCategory
 * @apiGroup Guide Category
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
 *      create_date: "2019-10-04T08:58:51.464Z",
 *      write_uid: "5d679819325ab70ab0157ce5",
 *      write_date: "2019-10-04T08:58:51.464Z",
 *      company_id: "ROOT",
 *      status: true,
 *      parent_id: null,
 *      sequence: 0,
 *      description: "",
 *      _id: "5d970e9203ca2d152823edcd",
 *      name: "Chuyên gia ",
 *      url_name: "chuyen-gia",
 *      __v: 0
 *  }
 */



 /**
 * @api {get} /guide/category/list_tree Get List Tree Of Guide Category
 * @apiVersion 0.1.0
 * @apiName GetListTreeOfGuideCategory
 * @apiGroup Guide Category
 * @apiSuccess {Object} list List of Guide Category.
 * @apiSuccessExample Success-Response-Data:
 *  [  
 *     {
 *       _id: "5d970e9203ca2d152823edcd",
 *      create_uid: "5d679819325ab70ab0157ce5",
 *      create_date: "2019-10-04T08:58:51.464Z",
 *      write_uid: "5d679819325ab70ab0157ce5",
 *      write_date: "2019-10-04T08:58:51.464Z",
 *      company_id: "ROOT",
 *      status: true,
 *      parent_id: null,
 *      description: "",
 *      name: "Chuyên gia ",
 *      url_name: "chuyen-gia",
 *      __v: 0,
 *      children: [
 *          {
 *              _id: "5d970fb503ca2d152823edd9",
 *              create_uid: "5d679819325ab70ab0157ce5",
 *              create_date: "2019-10-04T08:58:51.464Z",
 *              write_uid: "5d679819325ab70ab0157ce5",
 *              write_date: "2019-10-04T08:58:51.464Z",
 *              company_id: "ROOT",
 *              status: true,
 *              parent_id: "5d970e9203ca2d152823edcd",
 *              description: "",
 *              name: "Kết nối",
 *              url_name: "ket-noi",
 *              __v: 0
 *         },
 *         {}
 *      ]
 *    } 
 *  ]
 */


  /**
 * @api {get} /guide/category/count Count Number Of Guide Category
 * @apiVersion 0.1.0
 * @apiName CountNumberOfGuideCategory
 * @apiGroup Guide Category
 * @apiSuccess {Int32} number Number of Guide Category.
 * @apiSuccessExample Success-Response-Data:
 *  {
 *    74
 *  }
 */



  /**
 * @api {post} /guide/category/add Add New Guide Category
 * @apiVersion 0.1.0
 * @apiName AddNewGuideCategory
 * @apiGroup Guide Category
 * @apiParam {Boolean} status Guide Category Status.
 * @apiParam {ObjectId} delete_id Guide Category Delete ID.
 * @apiParam {ObjectId} parent_id Guide Category Parent ID.
 * @apiParam {String} url_name Guide Category URL Name.
 * @apiParam {String} name Guide Category Name.
 * @apiParam {String} description Guide Category Description.
 * @apiParam {Number} sequence Guide Category Sequence.
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
 *        "_id": "5d9fe168f8d47413b4d7bf38",
 *        "name": "TUYỂN DỤNG THỰC TẬP SINH",
 *        "__v": 0
 *    }
 *  }
 * @apiSuccessExample Success-Response-Data:
 *  [
 *     HTTP/1.1 200 OK
 *  ]
 */



 /**
 * @api {get} /guide/category/detail Guide Category Detail
 * @apiVersion 0.1.0
 * @apiName DetailGuideCategory
 * @apiGroup Guide Category
 * @apiParam {ObjectID} id Guide Category ID.
 * @apiParamExample {json} Request-Example:
 *     {
 *       "id": "5d970e9203ca2d152823edcd"
 *     } 
 * @apiSuccessExample Success-Response-Data:
 *     {
 *          _id: "5d970e9203ca2d152823edcd",
 *          create_uid: "5d679819325ab70ab0157ce5",
 *          create_date: "2019-10-04T08:58:51.464Z",
 *          write_uid: "5d679819325ab70ab0157ce5",
 *          write_date: "2019-10-04T08:58:51.464Z",
 *          company_id: "ROOT",
 *          status: true,
 *          parent_id: null,
 *          description: "",
 *          name: "Chuyên gia ",
 *          url_name: "chuyen-gia",
 *          __v: 0,
 *          children: [
 *              {
 *                  _id: "5d970fb503ca2d152823edd9",
 *                  create_uid: "5d679819325ab70ab0157ce5",
 *                  create_date: "2019-10-04T08:58:51.464Z",
 *                  write_uid: "5d679819325ab70ab0157ce5",
 *                  write_date: "2019-10-04T08:58:51.464Z",
 *                  company_id: "ROOT",
 *                  status: true,
 *                  parent_id: "5d970e9203ca2d152823edcd",
 *                  description: "",
 *                  name: "Kết nối",
 *                  url_name: "ket-noi",
 *                  __v: 0
 *              },
 *              {},
 *              {},
 *          ]
 *    }
 */



  /**
 * @api {put} /guide/category/edit Edit Guide Category
 * @apiVersion 0.1.0
 * @apiName EditGuideCategory
 * @apiGroup Guide Category
 * @apiParam {ObjectID} id Guide Category ID.
 * @apiParam {String} name Guide Category Name.
 * @apiParamExample {json} Request-Example:
 *     {
 *       "id": "5d970e9203ca2d152823edcd",
 *       "name": "Danh Sách Khách hàng của Asset "
 *     } 
 * @apiSuccessExample Success-Response-Data:
 *  [
 *     HTTP/1.1 200 OK
 *  ]
 */


  /**
 * @api {delete} /guide/category/delete Delete Guide Category
 * @apiVersion 0.1.0
 * @apiName DeleteGuideCategory
 * @apiGroup Guide Category
 * @apiParam {ObjectID} id Guide Category ID.
 * @apiParamExample {json} Request-Example:
 *     {
 *       "id": "5d970e9203ca2d152823edcd"
 *     } 
 * @apiSuccessExample Success-Response-Data:
 *  [
 *     HTTP/1.1 200 OK
 *  ]
 */