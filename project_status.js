/**
 * @api {get} /project/status/list Get List Of Project Status
 * @apiVersion 0.1.0
 * @apiName GetListOfProjectStatus
 * @apiGroup Project Status
 * @apiParam {Int32} page Number of page.
 * @apiParam {Int32} limit Number of items in one page.
 * @apiParam {Object} filter Filter Project Status By.
 * @apiSuccess {Object} list List of Project Status.
 * @apiParamExample Example:
 *     {
 *       "page": 2,
 *       "limit": 10,
 *       "filter": {"keyword":"my phu apartment"}
 *     }
 * @apiSuccessExample Success-Response-Data:
 *  [
 *     {
 *       "create_uid": "5d679819325ab70ab0157ce5",
 *       "create_date": "2017-10-10T07:44:48.110Z",
 *       "write_uid": "5d679819325ab70ab0157ce5",
 *       "write_date": "2019-07-27T06:40:38.906Z",
 *       "company_id": "ROOT",
 *       "status": true,
 *       "delete_id": null,
 *       "image_url": "",
 *       "sequence": 0,
 *       "parent_id": null,
 *       "_id": "5d6fa65bd4f342d9840972ca",
 *       "status_name": "Đã bàn giao",
 *       "order_by": 2,
 *       "percentage": 0.980000019073486,
 *       "marker_url": "marker_duan.svg",
 *       "marker_hover_url": "marker_bds_ban_hover.svg"
 *      }
 *  ]
 */

 /**
 * @api {get} /project/status/count Count Number Of Project Status
 * @apiVersion 0.1.0
 * @apiName CountNumberOfProjectStatus
 * @apiGroup Project Status
 * @apiSuccess {Int32} number Number of Project Status.
 * @apiSuccessExample Success-Response-Data:
 *  {
 *    9
 *  }
 */

 /**
 * @api {post} /project/status/add Add New Project Status
 * @apiVersion 0.1.0
 * @apiName AddNewProjectStatus
 * @apiGroup Project Status
 * @apiParam {Boolean} status Project Status.
 * @apiParam {ObjectId} delete_id Project Status Delete ID.
 * @apiParam {String} status_name Project Status Name.
 * @apiParam {Number} order_by Project Status Order By.
 * @apiParam {Number} percentage Project Status Percentage.
 * @apiParam {String} image_url Project Status Image URL.
 * @apiParam {Number} sequence Project Status Sequence.
 * @apiParam {ObjectId} parent_id Project Parent ID.
 * @apiSuccess {Object} number List of Project Status.
 * @apiParamExample {json} Request-Example:
 *     {
 *       "status": true,
 *       "data": {
 *          "create_uid": "5d679819325ab70ab0157ce5",
 *          "create_date": "2019-09-26T03:24:44.666Z",
 *          "write_uid": "5d679819325ab70ab0157ce5",
 *          "write_date": "2019-09-26T03:24:44.666Z",
 *          "company_id": "ROOT",
 *          "status": true,
 *          "delete_id": null,
 *          "image_url": "",
 *          "sequence": 0,
 *          "parent_id": null,
 *          "_id": "5d8c311f3549af16a4919697",
 *          "status_name": "Mới",
 *          "__v": 0
 *       }
 *    }
 * @apiSuccessExample Success-Response-Data:
 *  [
 *     HTTP/1.1 200 OK
 *  ]
 */

/**
 * @api {get} /project/status/list_tree Get List Tree Of Project Status
 * @apiVersion 0.1.0
 * @apiName GetListTreeOfProjectStatus
 * @apiGroup Project Status
 * @apiSuccess {Object} list List of Project Status List Tree.
 * @apiSuccessExample Success-Response-Data:
 *  [  
 *     {
 *       "_id": "5d6fa6a1d6bfa6bf87bea141",
 *       "create_uid": "1",
 *       "create_date": "2017-10-10T07:44:31.169Z",
 *       "write_uid": "b01e6241-0488-40b1-bc53-525050cd6d58",
 *       "write_date": "2019-07-27T06:40:53.360Z",
 *       "company_id": "ROOT",
 *       "status": true,
 *       "delete_id": "",
 *       "status_name": "Chưa làm",
 *       "order_by": 3,
 *       "percentage": 1,
 *       "parent_id": null,
 *       "marker_url": "Marker_chualam.svg",
 *       "marker_hover_url": "marker_bds_ban_hover.svg",
 *       "children": [
 *           {
 *               "_id": "5d844eed73f4fc01e646f773",
 *               "create_uid": "1",
 *               "create_date": "2017-10-10T07:44:31.169Z",
 *               "write_uid": "b01e6241-0488-40b1-bc53-525050cd6d58",
 *               "write_date": "2019-07-27T06:40:53.360Z",
 *               "company_id": "ROOT",
 *               "status": true,
 *               "delete_id": "",
 *               "status_name": "Chưa thi công",
 *               "order_by": 3,
 *               "percentage": 1,
 *               "parent_id": "5d6fa6a1d6bfa6bf87bea141",
 *               "marker_url": "Marker_chualam.svg",
 *               "marker_hover_url": "marker_bds_ban_hover.svg"
 *           }
 *       ]
 *     } 
 *  ]
 */

 /**
 * @api {put} /project/status/edit Edit Project Status
 * @apiVersion 0.1.0
 * @apiName EditProjectStatus
 * @apiGroup Project Status
 * @apiParam {ObjectID} id Project Status ID.
 * @apiParam {String} status_name Project Status Name.
 * @apiParamExample {json} Request-Example:
 *     {
 *       "id": "5d6fa6a1d6bfa6bf87bea141",
 *       "status_name": "Đã bàn giao"
 *     } 
 * @apiSuccessExample Success-Response-Data:
 *  [
 *     HTTP/1.1 200 OK
 *  ]
 */

 /**
 * @api {delete} /project/status/delete Delete Project Status
 * @apiVersion 0.1.0
 * @apiName DeleteProjectStatus
 * @apiGroup Project Status
 * @apiParam {ObjectID} id Project Status ID.
 * @apiParamExample {json} Request-Example:
 *     {
 *       "id": "5d6fa6a1d6bfa6bf87bea141"
 *     } 
 * @apiSuccessExample Success-Response-Data:
 *  [
 *     HTTP/1.1 200 OK
 *  ]
 */

 /**
 * @api {get} /project/status/detail Project Status Detail
 * @apiVersion 0.1.0
 * @apiName ProjectStatusDetail
 * @apiGroup Project Status
 * @apiParam {ObjectID} id Project Status ID.
 * @apiParamExample {json} Request-Example:
 *     {
 *       "id": "5d6fa6a1d6bfa6bf87bea141"
 *     } 
 * @apiSuccessExample Success-Response-Data:
 *  {
 *   "_id": "5d6fa6a1d6bfa6bf87bea141",
 *   "create_uid": "1",
 *   "create_date": "2017-10-10T07:44:31.169Z",
 *   "write_uid": "b01e6241-0488-40b1-bc53-525050cd6d58",
 *   "write_date": "2019-07-27T06:40:53.360Z",
 *   "company_id": "ROOT",
 *   "status": true,
 *   "delete_id": "",
 *   "status_name": "Chưa làm",
 *   "order_by": 3,
 *   "percentage": 1,
 *   "parent_id": null,
 *   "marker_url": "Marker_chualam.svg",
 *   "marker_hover_url": "marker_bds_ban_hover.svg",
 *   "children": [
 *       {
 *           "_id": "5d844eed73f4fc01e646f773",
 *           "create_uid": "1",
 *           "create_date": "2017-10-10T07:44:31.169Z",
 *           "write_uid": "b01e6241-0488-40b1-bc53-525050cd6d58",
 *           "write_date": "2019-07-27T06:40:53.360Z",
 *           "company_id": "ROOT",
 *           "status": true,
 *           "delete_id": "",
 *           "status_name": "Chưa thi công",
 *           "order_by": 3,
 *           "percentage": 1,
 *           "parent_id": "5d6fa6a1d6bfa6bf87bea141",
 *           "marker_url": "Marker_chualam.svg",
 *           "marker_hover_url": "marker_bds_ban_hover.svg"
 *       }
 *   ]
 *  }
 * @apiError MissingProjectstatusID Missing Project status <code>id</code>.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Missing Project status ID"
 *     }
 */