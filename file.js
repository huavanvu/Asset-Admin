/**
 * @api {get} /file/list Get List File
 * @apiVersion 0.1.0
 * @apiName GetListFile
 * @apiGroup File
 * @apiSuccess {Object} list List of File.
 * @apiSuccessExample Success-Response:
 *  [
 *      "/documents",
 *      "/images"
 *  ]
 */



/**
 * @api {post} /file/upload Upload Image
 * @apiVersion 0.1.0
 * @apiName UploadImage
 * @apiGroup File
 * @apiSuccessExample Success-Response-Data:
 *  [
 *     HTTP/1.1 200 OK
 *  ]
 */


 /**
 * @api {post} /file/upload_resource Upload File
 * @apiVersion 0.1.0
 * @apiName UploadResource
 * @apiGroup File
 * @apiSuccessExample Success-Response-Data:
 *  [
 *     HTTP/1.1 200 OK
 *  ]
 */


 /**
 * @api {post} /file/creare_folder Create Folder
 * @apiVersion 0.1.0
 * @apiName CreateFolder
 * @apiGroup File
 * @apiError TypeIsNotValid The <code>type</code> of File is not valid.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "message": "type is not valid"
 *     }
 * @apiError ExistSync The <code>folder</code> was existed.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "message": "Thư mục đã tồn tại"
 *     }
 * @apiSuccessExample Success-Response-Data:
 *  HTTP/1.1 200 OK
 *     {
 *       "message": "Tạo mới thành công"
 *     }
 */


 /**
 * @api {delete} /file/delete_folder Delete Folder
 * @apiVersion 0.1.0
 * @apiName DeleteFolder
 * @apiGroup File
 * @apiError CannotDeleteRootFolder The <code>root folder</code> can not be deleted.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "message": "Không thể xóa thư mục gốc (images)"
 *     }
 * @apiSuccessExample Success-Response-Data:
 *  HTTP/1.1 200 OK
 *     {
 *       "message": "Xóa thành công"
 *     }
 */


