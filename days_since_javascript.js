<script>
const date = new Date(2021, 7, 13);
var today = new Date(); // today

var time_diff = today.getTime() - date.getTime();
var days_diff = Math.trunc(time_diff / (1000 * 60 * 60 * 24));

    document.write(days_diff);

</script>