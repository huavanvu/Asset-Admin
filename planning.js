/**
 * @api {get} /planning/category/list Get List Category
 * @apiVersion 0.1.0
 * @apiName GetListCategory
 * @apiGroup Planning
 * @apiParam {Int32} page Number of page.
 * @apiParam {Int32} limit Number of items in one page .
 * @apiParamExample {Int32} Example:
 *     {
 *       "page": 2,
 *       "limit": 10
 *     }
 * 
 * @apiSuccess {Object} list List of Planning Category.
 * @apiSuccessExample Success-Response:
 *  [
 *     {
 *       _id: "CSK",
 *       create_uid: "b01e6241-0488-40b1-bc53-525050cd6d58",
 *       create_date: "2019-08-07T10:56:36.885Z",
 *       write_uid: "b01e6241-0488-40b1-bc53-525050cd6d58",
 *       write_date: "2019-08-07T10:56:36.885Z",
 *       company_id: "ROOT",
 *       status: 0,
 *       delete_id: "",
 *       name: "Đất sản xuất, kinh doanh phi nông nghiệp",
 *       forecolor: "#FFA0AA",
 *       backcolor: "#FFA0AA",
 *       sequence: 1,
 *       url_name: "Dat-nong-nghiep"
 *     }
 *  ]
 */


 /**
 * @api {get} /planning/count Count Number Of Planning
 * @apiVersion 0.1.0
 * @apiName CountNumberOfPlanning
 * @apiGroup Planning
 * @apiSuccess {Int32} number Number of Planning.
 * @apiSuccessExample Success-Response-Data:
 *  {
 *    17
 *  }
 */


 /**
 * @api {get} /planning/detail Get Planning Detail 
 * @apiVersion 0.1.0
 * @apiName GetPlanningDetail
 * @apiGroup Planning
 * @apiParam {ObjectID} id ID of planning .
 * @apiParamExample Example:
 *     {
 *       "id": "VN71.100"
 *     }
 * 
 * @apiSuccess {Object} object Planning Detail Item.
 * @apiSuccessExample Success-Response:
 *  {
 *      create_uid: "5d679819325ab70ab0157ce5",
 *      create_date: "2019-10-08T06:57:06.450Z",
 *      write_uid: "5d679819325ab70ab0157ce5",
 *      write_date: "2019-10-08T06:57:06.450Z",
 *      company_id: "",
 *      status: true,
 *      delete_uid: null,
 *      email: "",
 *      partner_id: "",
 *      lang_id: "",
 *      gmt_offset: "0.0",
 *      date_format: "",
 *      time_format: "",
 *      thousands_sep: "",
 *      decimal_point: "",
 *      avatar: "",
 *      type: "",
 *      inactive: false,
 *      renew_password_id: "",
 *      online: 0,
 *      user_referral_code: "ATC045",
 *      save_product: [
 *      "710801-P10.17",
 *      "710801-P10.121",
 *      "710801-P10.164"
 *      ],
 *      save_project: [ ],
 *      referral_code: "AAA012",
 *      fb_id: null,
 *      google_id: null,
 *      list_referral_user: [
 *      "5da4260ba3addc5841969a8c"
 *      ],
 *      _id: "5d9c3342cc1f7b3f4c8e79dd",
 *      delete_id: "",
 *      first_name: "Duong Cong ",
 *      last_name: "Vu",
 *      phone: "0123123123",
 *      password: "$2b$10$.e12Oy.hu4e94uaNzmbhJOPmobDtZeagEH6WMD7uU0DInxCU/Vhgi",
 *      __v: 27,
 *      country_code: 84,
 *      working_area: "Quận 11, Tp HCM",
 *      address: "1011 3 tháng 2, Quận 11, Tp HCM",
 *      followers: [ ]
 *  }
 */