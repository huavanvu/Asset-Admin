/**
 * @api {get} /planning/category/list Get List Planning Category
 * @apiVersion 0.1.0
 * @apiName GetListPlanningCategory
 * @apiGroup Planning Category
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
 *      _id: "BCS",
 *      create_uid: "b01e6241-0488-40b1-bc53-525050cd6d58",
 *      create_date: "2019-08-07T10:56:37.759Z",
 *      write_uid: "b01e6241-0488-40b1-bc53-525050cd6d58",
 *      write_date: "2019-08-07T10:56:37.759Z",
 *      company_id: "ROOT",
 *      status: 0,
 *      delete_id: "",
 *      name: "Đất bằng chưa sử dụng",
 *      forecolor: "#FFFFFE",
 *      backcolor: "#FFFFFE",
 *      sequence: 1,
 *      url_name: "Dat-nong-nghiep"
 * }
 */


   /**
 * @api {get} /planning/category/count Count Number Of Planning Category
 * @apiVersion 0.1.0
 * @apiName CountNumberOfPlanningCategory
 * @apiGroup Planning Category
 * @apiSuccess {Int32} number Number of Planning Category.
 * @apiSuccessExample Success-Response-Data:
 *  {
 *    2
 *  }
 */


 /**
 * @api {get} /planning/category/detail Planning Category Detail
 * @apiVersion 0.1.0
 * @apiName DetailPlanningCategory
 * @apiGroup Planning Category
 * @apiParam {ObjectID} id Planning Category ID.
 * @apiParamExample {json} Request-Example:
 *     {
 *       "id": "CQP"
 *     } 
 * @apiSuccessExample Success-Response-Data:
 *     {
 *          _id: "CQP",
 *          create_uid: "b01e6241-0488-40b1-bc53-525050cd6d58",
 *          create_date: "2019-08-07T10:56:36.818Z",
 *          write_uid: "b01e6241-0488-40b1-bc53-525050cd6d58",
 *          write_date: "2019-08-07T10:56:36.818Z",
 *          company_id: "ROOT",
 *          status: 0,
 *          delete_id: "",
 *          name: "Đất quốc phòng",
 *          forecolor: "#FF6450",
 *          backcolor: "#FF6450",
 *          sequence: 1,
 *          url_name: "Dat-nong-nghiep"
 *     }
 */