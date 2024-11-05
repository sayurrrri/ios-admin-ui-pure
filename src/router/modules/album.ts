// import { $t } from "@/plugins/i18n";
import { album } from "../enums";

export default {
  path: "/album",
  redirect: "/album/index",
  meta: {
    title: "相册管理",
    rank: album,
    icon: "IF-album"
  },
  children: [
    {
      path: "/album/index",
      name: "albumIndex",
      component: () => import("@/views/album/albums/index.vue"),
      meta: {
        title: "相册列表"
      }
    },
    {
      path: "/album/add",
      name: "albumAdd",
      component: () => import("@/views/album/albums/album_add.vue"),
      meta: {
        title: "新建相册"
      }
    }
  ]
} satisfies RouteConfigsTable;
