document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("articleForm");
  const result = document.getElementById("result");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const url = document.getElementById("url").value;
    const keyword = document.getElementById("keyword").value;
    const category = document.getElementById("category").value;

    result.textContent = `記事を作成中...
URL: ${url}
キーワード: ${keyword}
カテゴリー: ${category}`;
  });
});
