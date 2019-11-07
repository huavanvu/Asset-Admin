 /**
 * @api {get} /company/list Get List Company
 * @apiVersion 0.1.0
 * @apiName GetListCompany
 * @apiGroup Company
 * @apiParam {Int32} page Number of page.
 * @apiParam {Int32} limit Number of items in one page .
 * @apiParamExample Example:
 *     {
 *       "page": 1,
 *       "limit": 1
 *     }
 * @apiSuccess {Object} list List of Company.
 * @apiSuccessExample Success-Response:
 *  {
 *      create_uid: "5d679819325ab70ab0157ce5",
 *      create_date: "2019-10-22T08:52:57.983Z",
 *      write_uid: "5d679819325ab70ab0157ce5",
 *      write_date: "2019-10-22T08:52:57.983Z",
 *      company_id: "ROOT",
 *      status: true,
 *      delete_id: null,
 *      description: "",
 *      sequence: 0,
 *      icon: "",
 *      logo: "",
 *      keyword: "",
 *      points: {
 *          type: "Point",
 *          coordinates: [
 *              0,
 *              0
 *          ]
 *      },
 *      _id: "5d9ae33a6c872036a4b2d47f",
 *      name: "Asset",
 *      category_id: null,
 *      display_name: "Assetvn",
 *      parent_id: null,
 *      phone: "213213",
 *      email: "nguyenvu@asf.com",
 *      address: "Vung tau"
 *  }
 */


   /**
 * @api {post} /company/add Add New Company
 * @apiVersion 0.1.0
 * @apiName AddNewCompany
 * @apiGroup Company
 * @apiParam {Boolean} status Company Status.
 * @apiParam {ObjectId} delete_id Company Delete ID.
 * @apiParam {String} name Company Name.
 * @apiParam {ObjectId} parent_id Company Parent ID.
 * @apiParam {String} description Company Description.
 * @apiParam {String} code Company Code.
 * @apiParam {Number} sequence Company Sequence.
 * @apiParam {String} icon Company Icon.
 * @apiSuccess {String} logo Company Logo.
 * @apiParam {ObjectId} partner_id Company Partner ID.
 * @apiParam {ObjectId} category_id Company Category ID.
 * @apiParam {String} keyword Company Keyword.
 * @apiParam {Object} points Company Points.
 * @apiParamExample {json} Request-Example:
 *     {
 *          "_id" : ObjectId("5d9ae33a6c872036a4b2d47f"),
 *          "name" : "Asset",
 *          "category_id" : null,
 *          "display_name" : "Assetvn",
 *          "parent_id" : null,
 *          "phone" : "213213",
 *          "email" : "nguyenvu@asf.com",
 *          "address" : "Vung tau"
 *     }
 * @apiSuccessExample Success-Response-Data:
 *  [
 *     HTTP/1.1 200 OK
 *  ]
 */




  /**
 * @api {put} /company/edit Edit Company
 * @apiVersion 0.1.0
 * @apiName EditCompany
 * @apiGroup Company
 * @apiParam {ObjectID} id Company ID.
 * @apiParam {String} name Company Name.
 * @apiParamExample {json} Request-Example:
 *     {
 *       "id": "5d9ae33a6c872036a4b2d47f",
 *       "name": "Công ty cổ phần đầu tư Asset Holdings"
 *     } 
 * @apiSuccessExample Success-Response-Data:
 *  [
 *     HTTP/1.1 200 OK
 *  ]
 */


 


