$(document).ready(function(){
  function score_indicate(){
    // このような記述をすることで、subject_pointsという変数の中に
    // [国語の点数,英語の点数,数学の点数,理科の点数,社会の点数]という配列を作成できる。
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];

    // さらにこのような記述をすることで、「合計点：」となっている右の部分に合計点が出力される
    let sum = subject_points[0];
    sum = sum + subject_points[1];
    sum = sum + subject_points[2];
    sum = sum + subject_points[3];
    sum = sum + subject_points[4];
    $("#sum_indicate").text(sum);

    // ここに、上記を参考にして平均点を出力する処理を書き込む
    let avarage = 0;
    for(let i=0; i<subject_points.length; i++) {
        avarage = avarage + subject_points[i] / subject_points.length;
    }
    $("#avarage_indicate").text(avarage);
    // ここに、上記を参考にして平均点を出力する処理を書き込む
    
  };


  // ランクを求める
  // 平均点が80点以上なら"A"、60点以上なら"B"、
  // 40点以上なら"C"、それ以下なら"D"）を出力する処理を書き込む
  function get_achievement(){
    
  let subject_points = [Number($('#national_language').val()),
                        Number($('#english').val()),
                        Number($('#mathematics').val()),
                        Number($('#science').val()),
                        Number($('#society').val())
                        ];

    let number = subject_points.length;
    
    let rank = 0;
    for (let i=0; i<number; i++) {
        rank = rank + subject_points[i] / number;
    }
    if (rank >= 80) {
        rank = "A";
    }
    else if (rank < 80 && rank >= 60) {
        rank = "B";
    }
    else if (rank < 60 && rank >= 40) {
        rank = "C";
    }
    else  {
        rank = "D";
    }
    $("#evaluation").text(rank);
    return rank;
  };

  // ここに、全ての教科が60点以上なら"合格"の文字列、
  // 一つでも60点未満の教科があったら"不合格"の文字列を出す処理を書き込む
  function get_pass_or_failure(){
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];
      let result ="合格";
      let number = subject_points.length;
  
      for (let i=0; i<number; i++){
      if( subject_points[i] < 60) {
      result="不合格";
      break;
      }
  　 }
  　$("#judge").text(result);
  　return result; //この下にHTMLを書くと処理が終わるから、この上に書く
  };



  function judgement(subject_points){
    
    // ここに、「最終ジャッジ」のボタンを押したら「あなたの成績はAです。合格です」といった内容を出力する処理を書き込む
      let achievement = get_achievement(subject_points);
      let pass_or_failure = get_pass_or_failure(subject_points);
      $("#get_pass_or_failure").text(judge);

    // 下記の記述をすることで、「最終ジャッジ」のボタンを押すと「あなたの成績は（ここに「ランク」の値を入れる）です。（ここに「判定」の値を入れる）です」という文字の入った水色のフキダシが出力される処理が実装される。
    $('#declaration').append(`<label id="alert-indicate" class="alert alert-info">あなたの成績は${achievement}です。${pass_or_failure}です</label>`);
  };

  $('#national_language, #english, #mathematics, #science, #society').change(function() {
    score_indicate();
  });

  $('#btn-evaluation').click(function() {
    get_achievement();
  });

  $('#btn-judge').click(function() {
    get_pass_or_failure();
  });

  $('#btn-declaration').click(function() {
    judgement();
  });
});