const Base = require('./base.js');
const fs = require('fs');

module.exports = class extends Base {
  async goodsListPicAction() {
    const goodsFile = this.file('list_pic_url');
    if (think.isEmpty(goodsFile)) {
      return this.fail('保存失败');
    }
    const that = this;
    const filename = '/static/upload/goods/' + think.uuid(32) + '.jpg';
    const is = fs.createReadStream(goodsFile.path);
    const os = fs.createWriteStream(think.ROOT_PATH + '/www' + filename);
    is.pipe(os);

    return that.success({
      name: 'list_pic_url',
      fileUrl: 'https://www.wanders.com.cn' + filename
    });
  }

  async goodsPrimaryPicAction() {
    const goodsFile = this.file('primary_pic_url');
    if (think.isEmpty(goodsFile)) {
      return this.fail('保存失败');
    }
    const that = this;
    const filename = '/static/upload/goods/' + think.uuid(32) + '.jpg';
    const is = fs.createReadStream(goodsFile.path);
    const os = fs.createWriteStream(think.ROOT_PATH + '/www' + filename);
    is.pipe(os);

    return that.success({
      name: 'primary_pic_url',
      fileUrl: 'https://www.wanders.com.cn' + filename
    });
  }

  async brandPicAction() {
    const brandFile = this.file('brand_pic');
    if (think.isEmpty(brandFile)) {
      return this.fail('保存失败');
    }
    const that = this;
    const filename = '/static/upload/brand/' + think.uuid(32) + '.jpg';
    const is = fs.createReadStream(brandFile.path);
    const os = fs.createWriteStream(think.ROOT_PATH + '/www' + filename);
    is.pipe(os);

    return that.success({
      name: 'brand_pic',
      fileUrl: 'https://www.wanders.com.cn' + filename
    });
  }

  async brandNewPicAction() {
    const brandFile = this.file('brand_new_pic');
    if (think.isEmpty(brandFile)) {
      return this.fail('保存失败');
    }
    const that = this;
    const filename = '/static/upload/brand/' + think.uuid(32) + '.jpg';

    const is = fs.createReadStream(brandFile.path);
    const os = fs.createWriteStream(think.ROOT_PATH + '/www' + filename);
    is.pipe(os);

    return that.success({
      name: 'brand_new_pic',
      fileUrl: 'https://www.wanders.com.cn' + filename
    });
  }

  async categoryWapBannerPicAction() {
    const imageFile = this.file('wap_banner_pic');
    if (think.isEmpty(imageFile)) {
      return this.fail('保存失败');
    }
    const that = this;
    const filename = '/static/upload/category/' + think.uuid(32) + '.jpg';

    const is = fs.createReadStream(imageFile.path);
    const os = fs.createWriteStream(think.ROOT_PATH + '/www' + filename);
    is.pipe(os);

    return that.success({
      name: 'wap_banner_url',
      fileUrl: 'https://www.wanders.com.cn' + filename
    });
  }

  async topicThumbAction() {
    const imageFile = this.file('scene_pic_url');
    if (think.isEmpty(imageFile)) {
      return this.fail('保存失败');
    }
    const that = this;
    const filename = '/static/upload/topic/' + think.uuid(32) + '.jpg';

    const is = fs.createReadStream(imageFile.path);
    const os = fs.createWriteStream(think.ROOT_PATH + '/www' + filename);
    is.pipe(os);

    return that.success({
      name: 'scene_pic_url',
      fileUrl: 'https://www.wanders.com.cn' + filename
    });
  }
};
