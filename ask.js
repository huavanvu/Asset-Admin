/**
 * @api {get} /ask/list Get List Ask
 * @apiVersion 0.1.0
 * @apiName GetListAsk
 * @apiGroup Ask
 * @apiParam {Int32} page Number of page.
 * @apiParam {Int32} limit Number of items in one page .
 * @apiParamExample {Int32} Example:
 *     {
 *       "page": 1,
 *       "limit": 1
 *     }
 * 
 * @apiSuccess {Object} list List of Ask.
 * @apiSuccessExample Success-Response:
 *  {
 *      create_uid: null,
 *      create_date: "2019-10-08T08:58:00.381Z",
 *      write_uid: null,
 *      write_date: "2019-10-08T08:58:00.381Z",
 *      company_id: "ROOT",
 *      status: true,
 *      delete_id: null,
 *      category_id: [
 *          "5d7f38d6d76bcb1fe8742476"
 *      ],
 *      reaction: [ ],
 *      asset_name: "",
 *      sequence: 0,
 *      url_name: "",
 *      approve: "PENDING",
 *      _id: "5d9d35b5a3addc58413a9537",
 *      name: "Nhà của tôi trên Asset được liệt kê bởi đại lý của tôi. Làm thế nào tôi có thể chỉnh sửa danh sách của tôi?",
 *      __v: 0,
 *      content: "Nếu nhà của bạn được liệt kê thông qua đại lý của bạn, mọi chỉnh sửa hoặc cập nhật sẽ được thực hiện trực tiếp trên nguồn danh sách (MLS hoặc nhà cung cấp dịch vụ môi giới) bởi đại lý của bạn. Những thay đổi đó sau đó sẽ phản ánh trên Asset khi nguồn cấp dữ liệu được làm mới, trong vòng 24 giờ.",
 *      search: "nhà của tôi trên asset được liệt kê bởi đại lý của tôi. làm thế nào tôi có thể chỉnh sửa danh sách của tôi? nha cua toi tren asset duoc liet ke boi dai ly cua toi lam the nao toi co the chinh sua danh sach cua toi ",
 *      category: [
 *          {
 *              _id: "5d7f38d6d76bcb1fe8742476",
 *              name: "Pháp lý BĐS"
 *          }
 *      ],
 *      id: "5d9d35b5a3addc58413a9537"
 *  }
 */



 /**
 * @api {post} /ask/add Add New Ask
 * @apiVersion 0.1.0
 * @apiName AddNewAsk
 * @apiGroup Ask
 * @apiParam {Boolean} status Ask Status.
 * @apiParam {ObjectId} delete_id Ask Delete ID.
 * @apiParam {String} name Ask Name.
 * @apiParam {ObjectId} category_id Ask Category ID.
 * @apiParam {String} content Ask Content.
 * @apiParam {String} url_name Ask URL Name.
 * @apiParam {Number} sequence Ask Sequence.
 * @apiParam {String} asset_name Asset Rename Ask Title.
 * @apiParam {String} search Search Result.
 * @apiParam {Object} reaction Ask Reaction.
 * @apiParam {String} approve Approve Status.
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
 *          "url_name": "",
 *          "sequence": 0,
 *          "content": "",
 *          "url_name": "",
 *          "search": "tại sao danh sách fsbo của tôi không được đăng? tai sao danh sach fsbo cua toi khong duoc dang",
 *          "asset_name": "",
 *          "category_id": "5d7f313e2c69582d740b7afd",
 *          "approve": "APPROVED",
 *          "reaction": [],
 *          "name": "Tại sao danh sách FSBO của tôi không được đăng?",
 *          "__v": 0
 *       }
 *    }
 * @apiSuccessExample Success-Response-Data:
 *  [
 *     HTTP/1.1 200 OK
 *  ]
 */



 /**
 * @api {put} /ask/edit Edit Ask
 * @apiVersion 0.1.0
 * @apiName EditAsk
 * @apiGroup Ask
 * @apiParam {ObjectID} id Ask ID.
 * @apiParam {String} name Ask Name.
 * @apiParamExample {json} Request-Example:
 *     {
 *       "id": "5d9c4fb4302c732d088a8bbe",
 *       "name": "Tại sao danh sách thành viên của tôi không được đăng?"
 *     } 
 * @apiSuccessExample Success-Response-Data:
 *  [
 *     HTTP/1.1 200 OK
 *  ]
 */


 /**
 * @api {get} /ask/count Count Number Of Ask
 * @apiVersion 0.1.0
 * @apiName CountNumberOfAsk
 * @apiGroup Ask
 * @apiSuccess {Int32} number Number of Ask.
 * @apiSuccessExample Success-Response-Data:
 *  {
 *    17
 *  }
 */


/**
 * @api {delete} /ask/delete Delete Ask
 * @apiVersion 0.1.0
 * @apiName DeleteAsk
 * @apiGroup Ask
 * @apiParam {ObjectID} id Ask ID.
 * @apiParamExample {json} Request-Example:
 *     {
 *       "id": "5d9c4fb4302c732d088a8bbe"
 *     } 
 * @apiSuccessExample Success-Response-Data:
 *  [
 *     HTTP/1.1 200 OK
 *  ]
 */