 /**
 * @api {get} /resource/list Get List Resource
 * @apiVersion 0.1.0
 * @apiName GetListResource
 * @apiGroup Resource
 * @apiParam {Int32} page Number of page.
 * @apiParam {Int32} limit Number of items in one page .
 * @apiParamExample Example:
 *     {
 *       "page": 1,
 *       "limit": 1
 *     }
 * @apiSuccess {Object} list List of Resource.
 * @apiSuccessExample Success-Response:
 *  {
 *        _id: "5db00247c264020fd400b139",
 *        create_uid: "5da4260ba3addc5841969a8c",
 *        create_date: "2019-10-22T05:02:57.635Z",
 *        write_uid: "5d679819325ab70ab0157ce5",
 *        write_date: "2019-10-22T05:02:57.635Z",
 *        company_id: "ROOT",
 *        status: true,
 *        delete_id: null,
 *        category_id: [
 *           "5d881e007306f23f8cc1e2db"
 *        ],
 *        reaction: [ ],
 *        url_name: "mau-to-trinh-cua-so-xay-dung-gui-uy-ban-nhan-dan-cap-tinh-de-nghi-chap-thuan-chu-truong-dau-tu-du-an-xay-dung-nha-o",
 *        name: "Mẫu tờ trình của Sở Xây Dựng gửi Uỷ Ban Nhân Dân cấp tỉnh đề nghị chấp thuận chủ trương đầu tư dự án xây dựng nhà ở",
 *        document_url: "documents/Form/Phu_luc_02_Thong_tu_19_2016_TT_BXD1571801225867.pdf",
 *        description: "<p>Phụ lục 02 ban hành kèm theo Thông tư số19/2016/TT-BXD&nbsp;ngày 30/6/2016 của Bộ Xây dựng về mẫu tờ trình của SởXây dựng gửi&nbsp;Ủy ban nhân&nbsp;dân cấp tỉnh đề nghị chấp thuận chủ trương đầu tư dự án xây dựng nhà&nbsp;ở.</p>",
 *        __v: 0,
 *        search: "mẫu tờ trình của sở xây dựng gửi uỷ ban nhân dân cấp tỉnh đề nghị chấp thuận chủ trương đầu tư dự án xây dựng nhà ở mau to trinh cua so xay dung gui uy ban nhan dan cap tinh de nghi chap thuan chu truong dau tu du an xay dung nha o",
 *        type_document: "pdf",
 *        sequence: 0,
 *        category: {
 *          _id: "5d881e007306f23f8cc1e2db",
 *          create_date: "2019-09-23T01:04:29.670Z",
 *          parent_id: null,
 *          name: "Form mẫu",
 *          status: true,
 *          __v: 0
 *        }
 *  }
 */



/**
 * @api {post} /resource/add Add New Resource
 * @apiVersion 0.1.0
 * @apiName AddNewResource
 * @apiGroup Resource
 * @apiParam {Boolean} status Resource Status.
 * @apiParam {ObjectId} delete_id Resource Delete ID.
 * @apiParam {String} name Resource Name.
 * @apiParam {ObjectId} category_id Resource Category ID.
 * @apiParam {String} description Resource Description.
 * @apiParam {String} url_name Resource URL Name.
 * @apiParam {Number} sequence Resource Sequence.
 * @apiParam {String} document_url Resource Document URL.
 * @apiParam {Object} reaction Resource Reaction.
 * @apiParamExample {json} Request-Example:
 *     {
 *          "_id" : ObjectId("5db00247c264020fd400b139"),
 *          "create_uid" : ObjectId("5da4260ba3addc5841969a8c"),
 *          "create_date" : ISODate("2019-10-22T05:02:57.635Z"),
 *          "write_uid" : ObjectId("5d679819325ab70ab0157ce5"),
 *          "write_date" : ISODate("2019-10-22T05:02:57.635Z"),
 *          "company_id" : "ROOT",
 *          "status" : true,
 *          "delete_id" : null,
 *          "category_id" : [ 
 *              ObjectId("5d881e007306f23f8cc1e2db")
 *          ],
 *          "reaction" : [],
 *          "url_name" : "mau-to-trinh-cua-so-xay-dung-gui-uy-ban-nhan-dan-cap-tinh-de-nghi-chap-thuan-chu-truong-dau-tu-du-an-xay-dung-nha-o",
 *          "name" : "Mẫu tờ trình của Sở Xây Dựng gửi Uỷ Ban Nhân Dân cấp tỉnh đề nghị chấp thuận chủ trương đầu tư dự án xây dựng nhà ở",
 *          "document_url" : "documents/Form/Phu_luc_02_Thong_tu_19_2016_TT_BXD1571801225867.pdf",
 *          "description" : "<p>Phụ lục 02 ban hành kèm theo Thông tư số19/2016/TT-BXD&nbsp;ngày 30/6/2016 của Bộ Xây dựng về mẫu tờ trình của SởXây dựng gửi&nbsp;Ủy ban nhân&nbsp;dân cấp tỉnh đề nghị chấp thuận chủ trương đầu tư dự án xây dựng nhà&nbsp;ở.</p>",
 *          "__v" : 0,
 *          "search" : "mẫu tờ trình của sở xây dựng gửi uỷ ban nhân dân cấp tỉnh đề nghị chấp thuận chủ trương đầu tư dự án xây dựng nhà ở mau to trinh cua so xay dung gui uy ban nhan dan cap tinh de nghi chap thuan chu truong dau tu du an xay dung nha o",
 *          "type_document" : "pdf",
 *          "sequence" : 0
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
 * @api {get} /resource/count Count Number Of Resource
 * @apiVersion 0.1.0
 * @apiName CountNumberOfResource
 * @apiGroup Resource
 * @apiSuccess {Int32} number Number of Resource.
 * @apiSuccessExample Success-Response-Data:
 *  {
 *    29
 *  }
 */


  /**
 * @api {put} /resource/edit Edit Resource
 * @apiVersion 0.1.0
 * @apiName EditResource
 * @apiGroup Resource
 * @apiParam {ObjectID} id Resource ID.
 * @apiParam {String} name Guide Name.
 * @apiParamExample {json} Request-Example:
 *     {
 *       "id": "5db00247c264020fd400b139",
 *       "name": "Mẫu tờ trình của Sở Xây Dựng"
 *     } 
 * @apiSuccessExample Success-Response-Data:
 *  [
 *     HTTP/1.1 200 OK
 *  ]
 * @apiError IdIsNull The <code>id</code> of Resource is null.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "status": "false",
 *       "error": "ID is null"
 *     }
 */


/**
 * @api {get} /resource/detail Get Resource Detail 
 * @apiVersion 0.1.0
 * @apiName GetResourceDetail
 * @apiGroup Resource
 * @apiParam {ObjectID} id ID of resource item .
 * @apiParamExample Example:
 *     {
 *       "id": 5d96f24a0e6a5137e42dc153
 *     }
 * 
 * @apiSuccess {Object} Resource Detail.
 * @apiSuccessExample Success-Response:
 *  {
 *      create_uid: null,
 *      create_date: "2019-10-22T05:02:57.635Z",
 *      write_uid: "5d679819325ab70ab0157ce5",
 *      write_date: "2019-10-22T05:02:57.635Z",
 *      company_id: "ROOT",
 *      status: true,
 *      delete_id: null,
 *      sequence: 0,
 *      category_id: [
 *          "5d881e007306f23f8cc1e2db"
 *      ],
 *      reaction: [ ],
 *      _id: "5db00247c264020fd400b139",
 *      url_name: "mau-to-trinh-cua-so-xay-dung-gui-uy-ban-nhan-dan-cap-tinh-de-nghi-chap-thuan-chu-truong-dau-tu-du-an-xay-dung-nha-o",
 *      name: "Mẫu tờ trình của Sở Xây Dựng gửi Uỷ Ban Nhân Dân cấp tỉnh đề nghị chấp thuận chủ trương đầu tư dự án xây dựng nhà ở",
 *      document_url: "documents/Form/Phu_luc_02_Thong_tu_19_2016_TT_BXD1571801225867.pdf",
 *      description: "<p>Phụ lục 02 ban hành kèm theo Thông tư số19/2016/TT-BXD&nbsp;ngày 30/6/2016 của Bộ Xây dựng về mẫu tờ trình của SởXây dựng gửi&nbsp;Ủy ban nhân&nbsp;dân cấp tỉnh đề nghị chấp thuận chủ trương đầu tư dự án xây dựng nhà&nbsp;ở.</p>",
 *      __v: 0,
 *      search: "mẫu tờ trình của sở xây dựng gửi uỷ ban nhân dân cấp tỉnh đề nghị chấp thuận chủ trương đầu tư dự án xây dựng nhà ở mau to trinh cua so xay dung gui uy ban nhan dan cap tinh de nghi chap thuan chu truong dau tu du an xay dung nha o",
 *      type_document: "pdf"
 *  }
 */


/**
 * @api {delete} /resource/delete Delete Resource
 * @apiVersion 0.1.0
 * @apiName DeleteResource
 * @apiGroup Resource
 * @apiParam {ObjectID} id Resource ID.
 * @apiParamExample {json} Request-Example:
 *     {
 *       "id": "5db00247c264020fd400b139"
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