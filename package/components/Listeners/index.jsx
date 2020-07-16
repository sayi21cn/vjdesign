import Vue from "vue";
import Editor from "./Editor";
import { mapState } from "vuex";
import { CollapseItem } from "element-ui";

export default Vue.extend({
  components: {
    "listeners-editor": Editor
  },
  data() {
    return {
      dialog: {
        visible: false,
        data: {}
      },
      data: [],
      baseData: [{ label: "添加" }]
    };
  },
  methods: {
    onAdd() {},
    onSubmit() {}
  },
  computed: {
    ...mapState({
      listeners: ({ form }) => form.value.listeners
    })
  },
  render() {
    return (
      <CollapseItem
        key="vjform_watchs"
        name="vjform_watchs"
        class="property-wrapper"
      >
        <div slot="title">
          <i class="el-icon-s-operation"></i>监听
        </div>
        <listeners-editor
          visible={this.dialog.visible}
          v-model={this.dialog.data}
          onSubmit={this.onSubmit}
          onCancel={() => (this.dialog.visible = false)}
        ></listeners-editor>
        敬请期待。。。
        {/* <el-tree
          data={this.data}
          scopedSlots={{ default: () => <div></div> }}
        ></el-tree> */}
        {/* <el-button size="small" onClick={this.onAdd} style="width: 100%">
          <i class="el-icon-plus"></i>
          添加
        </el-button> */}
      </CollapseItem>
    );
  }
});