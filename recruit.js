/**
 * @api {get} /recruit/list Get List Recruit
 * @apiVersion 0.1.0
 * @apiName GetListRecruit
 * @apiGroup Recruit
 * @apiParam {Int32} page Number of page.
 * @apiParam {Int32} limit Number of items in one page .
 * @apiParamExample {Int32} Example:
 *     {
 *       "page": 1,
 *       "limit": 1
 *     }
 * 
 * @apiSuccess {Object} list List of Recruit.
 * @apiSuccessExample Success-Response:
 *  {
 *       "_id": "5d7f5e6c931dfb14d43a5c27",
 *       "create_uid": "5d679819325ab70ab0157ce5",
 *       "create_date": "2019-09-16T10:05:32.805Z",
 *       "write_uid": "5d679819325ab70ab0157ce5",
 *       "write_date": "2019-10-07T02:10:30.733Z",
 *       "company_id": "ROOT",
 *       "status": true,
 *       "category_id": [
 *           "5d7f314b2c69582d740b7afe"
 *       ],
 *       "sequence": 4,
 *       "content": "<p class=\"ql-align-justify\"><strong>About you:</strong></p><ul><li class=\"ql-align-justify\">Sinh viên năm 3, 4 chuyên ngành liên quan đến Web Developer.</li><li class=\"ql-align-justify\">Có kiến thức về: Javascript, nodejs, java, reactjs. Express framework. PostgreSQL, MySQL, Mongodb. HTML/CSS. Google Map.</li><li class=\"ql-align-justify\">Năng động, giao tiếp tốt, cẩn thận, quyết đoán, trung thực nhiệt huyết với công việc.</li></ul><p class=\"ql-align-justify\"><strong>Job description:</strong></p><ul><li class=\"ql-align-justify\">Làm việc với trưởng nhóm lập trình để xây dựng hệ thống website bất động sản.</li><li class=\"ql-align-justify\">Lập kế hoạch và báo cáo cho trưởng nhóm về tiến độ công việc.</li><li class=\"ql-align-justify\">Nghiên cứu, học hỏi công nghệ mới để đáp ứng nhu cầu công việc.</li></ul><p class=\"ql-align-justify\"><strong>What we offer:</strong></p><ul><li class=\"ql-align-justify\">Được hướng dẫn, đào tạo thực tế chuyên môn.</li><li class=\"ql-align-justify\">Được hưởng phụ cấp theo năng lực.</li><li class=\"ql-align-justify\">Có cơ hội trở thành nhân viên chính thức của Công ty.</li></ul><p class=\"ql-align-justify\"><strong>Our contact:</strong></p><ul><li class=\"ql-align-justify\">Địa chỉ: 216 Nguyễn Hoàng, KP. 5, P. An Phú, Q. 2, TP. HCM.</li><li class=\"ql-align-justify\">Số điện thoại liên hệ: (028) 6281 1205.</li><li class=\"ql-align-justify\">Email: hr@asset.vn</li></ul>",
 *       "url_name": "thuc-tap-sinh-web-developer",
 *       "keyword": "",
 *       "description": "",
 *       "image_url": "images/Recruit/ttswebdev1568629831372.png",
 *       "name": "THỰC TẬP SINH WEB DEVELOPER",
 *       "__v": 0,
 *       "category": {
 *           "_id": "5d7f314b2c69582d740b7afe",
 *           "name": "TUYỂN DỤNG THỰC TẬP SINH"
 *       }
 *  }
 */



 /**
 * @api {get} /recruit/all Get All Recruit
 * @apiVersion 0.1.0
 * @apiName GetAllRecruit
 * @apiGroup Recruit
 * @apiSuccess {Object} list List of All Recruit.
 * @apiSuccessExample Success-Response:
 *  [
 *      {
 *          _id: "5d7f313e2c69582d740b7afd",
 *          create_uid: "5d679819325ab70ab0157ce5",
 *          create_date: "2019-09-16T06:51:33.828Z",
 *          write_uid: "5d679819325ab70ab0157ce5",
 *          write_date: "2019-09-16T06:51:33.828Z",
 *          company_id: "ROOT",
 *          status: true,
 *          delete_id: null,
 *          parent_id: null,
 *          name: "TUYỂN DỤNG NHÂN VIÊN",
 *          __v: 0,
 *          sequence: 2,
 *          item: [
 *              {
 *                  _id: "5d7f471d6301901a2875a842",
 *                  create_uid: "5d679819325ab70ab0157ce5",
 *                  create_date: "2019-09-16T08:26:05.935Z",
 *                  write_uid: "5d679819325ab70ab0157ce5",
 *                  write_date: "2019-10-07T02:12:01.271Z",
 *                  company_id: "ROOT",
 *                  status: true,
 *                  category_id: [
 *                      "5d7f313e2c69582d740b7afd"
 *                  ],
 *                  sequence: 1,
 *                  content: "<p><strong>Job description:</strong></p><ul><li>Assisting the Executive Director as an online operator with all day-to-day issues including preparing and coordinating communications as well as managing complex calendars with a constantly changing schedule.</li><li>Interacting with senior managers and important executive groups (reporting directly to the CEO) to follow up all special projects and initiatives.</li><li>Actively managing and prioritizing access to the CEO with grace and diplomacy; being responsible for his calendar.</li><li>Traveling with CEO whenever needed, especially scheduled Council meetings.</li><li>Planning as required by the CEO.</li></ul><p><strong>About you:</strong></p><ul><li>At least 03 years of experience working as Assistant of CEO or Chairman.</li><li>Bachelor’s Degree from accredited College/University.</li><li>Ability to deal with senior managing directors and manage those relationships gracefully with acumen.</li><li>Well-organized, detail-oriented and bold.</li></ul><p><strong>What we offer:</strong></p><ul><li>Salary: as agreement.</li><li>Full - time.</li><li>Health insurance.</li><li>Bonus.</li></ul><p><strong>Our contact:</strong></p><p>Address: 216 Nguyen Hoang Street, An Phu Ward, District 2, Ho Chi Minh City.</p><p>Contact number: 028 6281 1205</p><p>Email: hr@asset.vn (Ms. Thủy).</p>",
 *                  url_name: "ceo-assistant",
 *                  keyword: "",
 *                  description: "",
 *                  image_url: "images/Recruit/ceoassisstant1568629805057.png",
 *                  name: "CEO ASSISTANT",
 *                  __v: 0
 *              },
 *              {},
 *              {},
 *              {}
 *          ]
 *      },
 *      {},
 *      {}
 *  ]
 */


 /**
 * @api {get} /recruit/detail Get Recruit Detail 
 * @apiVersion 0.1.0
 * @apiName GetRecruitDetail
 * @apiGroup Recruit
 * @apiParam {ObjectID} id ID of recruit item .
 * @apiParamExample Example:
 *     {
 *       "id": 5d7f4af86301901a2875a843
 *     }
 * 
 * @apiSuccess {Object} list List of Recruit.
 * @apiSuccessExample Success-Response:
 *  {
 *   "create_uid": null,
 *   "create_date": "2019-09-16T08:42:32.176Z",
 *   "write_uid": "5d679819325ab70ab0157ce5",
 *   "write_date": "2019-09-16T08:25:52.279Z",
 *   "company_id": "ROOT",
 *   "status": false,
 *   "category_id": null,
 *   "sequence": 0,
 *   "content": "<p><img src=\"http://localhost:7777/images/pexels-photo-2606383.jpeg\" height=\"auto\" width=\"200\"></p><p><br></p><p>Không có dữ liệu bla bla bla</p><p>abc xypz</p>",
 *   "url_name": "nhan-vien-nhap-lieu",
 *   "keyword": "abc",
 *   "description": "",
 *   "image_url": "images/Post/95475dc0-7a06-4d6e-82ca-e972ea36445f.jpg",
 *   "_id": "5d7f4af86301901a2875a843",
 *   "name": "NHÂN VIÊN NHẬP LIỆU",
 *   "__v": 0
 *  }
 */

/**
 * @api {post} /recruit/add Add New Recruit
 * @apiVersion 0.1.0
 * @apiName AddNewRecruit
 * @apiGroup Recruit
 * @apiParam {Boolean} status Recruit Status.
 * @apiParam {ObjectId} delete_id Recruit Delete ID.
 * @apiParam {String} name Recruit Name.
 * @apiParam {ObjectId} category_id Recruit Category ID.
 * @apiParam {String} content Recruit Content.
 * @apiParam {String} url_name Recruit URL Name.
 * @apiParam {Number} sequence Recruit Sequence.
 * @apiParam {String} keyword Recruit Keyword.
 * @apiSuccess {String} description Recruit Description.
 * @apiSuccess {String} image_url Recruit Image URL.
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
 *          "content": "",
 *          "url_name": "",
 *          "keyword": "",
 *          "description": "",
 *          "category_id": "5d7f313e2c69582d740b7afd",
 *          "_id": "5d8c311f3549af16a4919697",
 *          "name": "CEO ASSISTANRT",
 *          "__v": 0
 *       }
 *    }
 * @apiSuccessExample Success-Response-Data:
 *  [
 *     HTTP/1.1 200 OK
 *  ]
 */


/**
 * @api {put} /recruit/edit Edit Recruit
 * @apiVersion 0.1.0
 * @apiName EditRecruit
 * @apiGroup Recruit
 * @apiParam {ObjectID} id Recruit ID.
 * @apiParam {String} name Recruit Name.
 * @apiParamExample {json} Request-Example:
 *     {
 *       "id": "5d7f471d6301901a2875a842",
 *       "name": "PHÁT TRIỂN THỊ TRƯỜNG"
 *     } 
 * @apiSuccessExample Success-Response-Data:
 *  [
 *     HTTP/1.1 200 OK
 *  ]
 */

 /**
 * @api {delete} /recruit/delete Delete Recruit
 * @apiVersion 0.1.0
 * @apiName DeleteRecruit
 * @apiGroup Recruit
 * @apiParam {ObjectID} id Recruit ID.
 * @apiParamExample {json} Request-Example:
 *     {
 *       "id": "5d7f471d6301901a2875a842"
 *     } 
 * @apiSuccessExample Success-Response-Data:
 *  [
 *     HTTP/1.1 200 OK
 *  ]
 */

/**
 * @api {get} /recruit/count Count Number Of Recruit
 * @apiVersion 0.1.0
 * @apiName CountNumberOfRecruit
 * @apiGroup Recruit
 * @apiSuccess {Int32} number Number of Project Status.
 * @apiSuccessExample Success-Response-Data:
 *  {
 *    17
 *  }
 */