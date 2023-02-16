<template>
  <a-upload
    v-model:file-list="fileList"
    list-type="picture-card"
    @preview="handlePreview"
    @change="handleChange">
    <div v-if="fileList.length < 1">
      <plus-outlined />
      <div style="margin-top: 8px">Upload</div>
    </div>
  </a-upload>
  <a-row class="mt-4">
    <a-col>
      <a-button key="submit" type="primary" html-type="submit" :loading="loading" :disabled="!fileList.length || !img_url_changed" @click="submit">Update</a-button>
    </a-col>
  </a-row>    
  <a-modal :visible="previewVisible" :title="previewTitle" :footer="null" @cancel="handleCancel">
    <img alt="example" style="width: 100%" :src="previewImage" />
  </a-modal>
</template>
<script>
import { defineComponent, ref } from 'vue';
import { PlusOutlined, LoadingOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';
import axios from 'axios'

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}
export default defineComponent({
  components: {
    LoadingOutlined,
    PlusOutlined,
  },
  setup() {
    const loading = ref(false);
    const previewVisible = ref(false);
    const previewImage = ref('');
    const previewTitle = ref('');

    const beforeUpload = file => {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        message.error('You can only upload JPG file!');
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
      }
      return isJpgOrPng && isLt2M;
    };

    const handleCancel = () => {
      previewVisible.value = false;
      previewTitle.value = '';
    };    

    const handlePreview = async file => {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
      }
      previewImage.value = file.url || file.preview;
      previewVisible.value = true;
      previewTitle.value = file.name || file.url.substring(file.url.lastIndexOf('/') + 1);
    };

    return {
      loading,
      handleCancel,
      handlePreview,
      beforeUpload,
      previewVisible,
      previewImage,
      previewTitle
    };
  },
  data() {
    return {      
      base_url: import.meta.env.VITE_BASE_URL,
      user_data: this.$cookies.get('user-data'),

      fileList: [],
      img_url: null,
      img_url_changed: false
    }
  },
  methods: {
    handleChange(info) {
      console.log(this.fileList)
      if(info.file.status === 'uploading') {
        this.img_url = info.file.originFileObj
        this.img_url_changed = true
        console.log(this.img_url_changed)
      }
    },
    getUser() {
      axios.post(`/user/show/${this.user_data.id}`, {}, {
        headers: {"Authorization" : `Bearer ${this.$cookies.get('igo-x-access-token')}`}
      })
      .then((res) => {
        let data = res.data.data
        let profile_picture = data.picture
        this.fileList.push({
          uid: '1',
          name: profile_picture.replace(this.base_url.replace('api/v1/', '') + 'storage/profile_pics/', ''),
          status: 'done',
          url: profile_picture,
        })
      })
      .catch((err) => {
        console.error(err)
      });
    },
    submit() {
      this.loading = true
      let data = new FormData()
      data.append("picture", this.img_url)

      axios.post('/auth/update-user-profile-pic', data, {
        headers: {"Authorization" : `Bearer ${this.$cookies.get('igo-x-access-token')}`}
      })
      .then((res) => {
        message.success(res.data.message)
        this.loading = false
      })
      .catch((err) => {
        console.error(err)
        message.error(err.response.data.message)
        this.loading = false
      });
    },
  },
  mounted() {
    this.getUser()
  }
});
</script>
<style>
.avatar-uploader > .ant-upload {
  width: 128px;
  height: 128px;
}
.ant-upload-list-picture-card-container {
  width: 350px!important;
  height: 350px!important;
}
.ant-upload-list-picture-card-container .ant-tooltip-placement-top {
  display: none!important;
}
.ant-upload-select-picture-card {
  width: 128px!important;
  height: 128px!important;
}
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}
.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
.ant-upload-picture-card-wrapper {
  display: flex;
  width: 100%;
  justify-content: center;
}
.ant-upload-list-item-error {
  border: 1px solid #d9d9d9!important;
}
</style>