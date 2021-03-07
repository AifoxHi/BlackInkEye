<template>
    <webapp-bie-hmenu />
    <webapp-bie-aboutme />
    <webapp-bie-more-content />
    <webapp-bie-timelines />
</template>

<script>
import bie_home_menu from './bie-main/Menu.vue';
import bie_about_me from './bie-main/AboutMe.vue';
import bie_more_content from './bie-main/MoreContent.vue';
import bie_timelines from './bie-main/Timelines.vue';

export default {

  name: 'App',

  components: {
    'webapp-bie-hmenu':bie_home_menu,
    'webapp-bie-aboutme':bie_about_me,
    'webapp-bie-more-content':bie_more_content,
    'webapp-bie-timelines':bie_timelines
      },
};
</script>
