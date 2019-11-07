/**
 * @api {get} /recruit/category/list Get List Recruit Category
 * @apiVersion 0.1.0
 * @apiName GetListRecruitCategory
 * @apiGroup Recruit Category
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
 *        "create_uid": "5d679819325ab70ab0157ce5",
 *        "create_date": "2019-09-16T06:51:33.828Z",
 *        "write_uid": "5d679819325ab70ab0157ce5",
 *        "write_date": "2019-09-16T06:51:33.828Z",
 *        "company_id": "ROOT",
 *        "status": true,
 *        "delete_id": null,
 *        "parent_id": null,
 *        "sequence": 2,
 *        "_id": "5d7f313e2c69582d740b7afd",
 *        "name": "TUYỂN DỤNG NHÂN VIÊN",
 *        "__v": 0
 *    },
 *    {
 *        "create_uid": "5d679819325ab70ab0157ce5",
 *        "create_date": "2019-09-16T06:51:33.828Z",
 *        "write_uid": "5d679819325ab70ab0157ce5",
 *        "write_date": "2019-09-16T06:51:33.828Z",
 *        "company_id": "ROOT",
 *        "status": true,
 *        "delete_id": null,
 *        "parent_id": null,
 *        "sequence": 1,
 *        "_id": "5d7f314b2c69582d740b7afe",
 *        "name": "TUYỂN DỤNG THỰC TẬP SINH",
 *        "__v": 0
 *    }
 *  ]
 */



 /**
 * @api {get} /recruit/category/all Get All Recruit Category
 * @apiVersion 0.1.0
 * @apiName GetAllRecruitCategory
 * @apiGroup Recruit Category
 * @apiSuccess {Object} list All of Recruit Category.
 * @apiSuccessExample Success-Response:
 *  [
 *    {
 *        "create_uid": "5d679819325ab70ab0157ce5",
 *        "create_date": "2019-09-16T06:51:33.828Z",
 *        "write_uid": "5d679819325ab70ab0157ce5",
 *        "write_date": "2019-09-16T06:51:33.828Z",
 *        "company_id": "ROOT",
 *        "status": true,
 *        "delete_id": null,
 *        "parent_id": null,
 *        "sequence": 2,
 *        "_id": "5d7f313e2c69582d740b7afd",
 *        "name": "TUYỂN DỤNG NHÂN VIÊN",
 *        "__v": 0
 *    },
 *    {
 *        "create_uid": "5d679819325ab70ab0157ce5",
 *        "create_date": "2019-09-16T06:51:33.828Z",
 *        "write_uid": "5d679819325ab70ab0157ce5",
 *        "write_date": "2019-09-16T06:51:33.828Z",
 *        "company_id": "ROOT",
 *        "status": true,
 *        "delete_id": null,
 *        "parent_id": null,
 *        "sequence": 1,
 *        "_id": "5d7f314b2c69582d740b7afe",
 *        "name": "TUYỂN DỤNG THỰC TẬP SINH",
 *        "__v": 0
 *    }
 *  ]
 */

 /**
 * @api {get} /recruit/category/count Count Number Of Recruit Category
 * @apiVersion 0.1.0
 * @apiName CountNumberOfRecruitCategory
 * @apiGroup Recruit Category
 * @apiSuccess {Int32} number Number of Recruit Category.
 * @apiSuccessExample Success-Response-Data:
 *  {
 *    2
 *  }
 */

 /**
 * @api {post} /recruit/category/add Add New Recruit Category
 * @apiVersion 0.1.0
 * @apiName AddNewRecruitCategory
 * @apiGroup Recruit Category
 * @apiParam {Boolean} status Recruit Category Status.
 * @apiParam {ObjectId} delete_id Recruit Category Delete ID.
 * @apiParam {String} name Recruit Category Name.
 * @apiParam {ObjectId} parent_id Recruit Category Parent ID.
 * @apiParam {Number} sequence Recruit Category Sequence.
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
 * @api {delete} /recruit/category/delete Delete Recruit Category
 * @apiVersion 0.1.0
 * @apiName DeleteRecruitCategory
 * @apiGroup Recruit Category
 * @apiParam {ObjectID} id Recruit Category ID.
 * @apiParamExample {json} Request-Example:
 *     {
 *       "id": "5d7f313e2c69582d740b7afd"
 *     } 
 * @apiSuccessExample Success-Response-Data:
 *  [
 *     HTTP/1.1 200 OK
 *  ]
 */

 /**
 * @api {put} /recruit/category/edit Edit Recruit Category
 * @apiVersion 0.1.0
 * @apiName EditRecruitCategory
 * @apiGroup Recruit Category
 * @apiParam {ObjectID} id Recruit Category ID.
 * @apiParam {String} name Recruit Category Name.
 * @apiParamExample {json} Request-Example:
 *     {
 *       "id": "5d7f313e2c69582d740b7afd",
 *       "name": "TUYỂN DỤNG NHÂN VIÊN TẠM THỜI"
 *     } 
 * @apiSuccessExample Success-Response-Data:
 *  [
 *     HTTP/1.1 200 OK
 *  ]
 */

 