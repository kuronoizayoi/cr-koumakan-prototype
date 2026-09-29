/* =========================================================
   セリフデータ ひな形 (dialogue.js)
   このファイルを書き換えるだけでゲーム内の掛け合いが変わります
   (index.htmlと同じフォルダに置いてください)
   ---------------------------------------------------------
   ■ 書き方
   ・who : 誰が喋るか(下の名前をそのまま使う)
       rumia cirno meiling daiyousei patchouli koakuma
       remilia sakuya flandre reimu marisa
   ・text: セリフ。全角15文字くらいまで推奨(はみ出すと切れます)
   ・talk: リーチ中の掛け合い。上から順番に表示されます
       - ノーマルリーチ → 最初の2つだけ表示
       - SP/SPSPリーチ → 全部表示
   ・win : 当たった時の〆セリフ(複数書くとランダムで1つ)
   ・lose: 外れた時の〆セリフ(複数書くとランダムで1つ)
   ■ セリフを増やす時は {who:'名前',text:'セリフ'}, をコピペで追加
   ========================================================= */
window.DIALOGUE = {

  /* ---- SP・ノーマルリーチの掛け合い(図柄キャラ別) ---- */
  sp: {
    rumia: {
      talk: [
        {who:'rumia', text:'そーなのかー？'},
        {who:'reimu', text:'そうなのよ。悪いけど通るわ'},
        {who:'rumia', text:'目の前が真っ暗だー'},
      ],
      win:  [{who:'rumia', text:'カーニバルだー！'}],
      lose: [{who:'rumia', text:'そーじゃないのかー…'}],
    },
    cirno: {
      talk: [
        {who:'cirno', text:'あたいったら最強ね！'},
        {who:'reimu', text:'はいはい、最強最強'},
        {who:'cirno', text:'本気出しちゃうわよ！'},
      ],
      win:  [{who:'cirno', text:'ほら！あたいの勝ちー！'}],
      lose: [{who:'cirno', text:'ちょ、ちょっと溶けただけよ！'}],
    },
    meiling: {
      talk: [
        {who:'meiling', text:'ここから先は通しません！'},
        {who:'reimu', text:'昼寝中に悪いわね'},
        {who:'meiling', text:'私だってやる時はやります！'},
      ],
      win:  [{who:'meiling', text:'華麗にキメました！'}],
      lose: [{who:'meiling', text:'うぅ、また眠くなって…'}],
    },
    daiyousei: {
      talk: [
        {who:'daiyousei', text:'が、がんばります…！'},
        {who:'reimu', text:'あんたは無理しないでね'},
        {who:'daiyousei', text:'えいっ…！'},
      ],
      win:  [{who:'daiyousei', text:'や、やりました〜！'}],
      lose: [{who:'daiyousei', text:'ごめんなさい〜…'}],
    },
    patchouli: {
      talk: [
        {who:'patchouli', text:'動かない大図書館、動くわ'},
        {who:'reimu', text:'本の虫が出てきたわね'},
        {who:'patchouli', text:'日と月と…火よ'},
      ],
      win:  [{who:'patchouli', text:'ふぅ。計算通りね'}],
      lose: [{who:'patchouli', text:'…喘息が。今日は帰るわ'}],
    },
    koakuma: {
      talk: [
        {who:'koakuma', text:'図書館は立入禁止ですよ♪'},
        {who:'reimu', text:'司書の悪魔って暇そうね'},
        {who:'koakuma', text:'それ、聞こえてますからね？'},
      ],
      win:  [{who:'koakuma', text:'パチュリー様に褒められちゃう♪'}],
      lose: [{who:'koakuma', text:'ご、ごめんなさいぃ…'}],
    },
    remilia: {
      talk: [
        {who:'remilia', text:'今宵、運命は紅く染まるわ'},
        {who:'reimu', text:'カリスマだけは一人前ね'},
        {who:'remilia', text:'私の運命(さだめ)は私が決める'},
      ],
      win:  [{who:'remilia', text:'これが運命よ！'}],
      lose: [{who:'remilia', text:'…今日は月が悪いわ'}],
    },
    sakuya: {
      talk: [
        {who:'sakuya', text:'お嬢様の館で狼藉は困ります'},
        {who:'reimu', text:'時間停めるのは反則でしょ'},
        {who:'sakuya', text:'咲夜の時間になりました'},
      ],
      win:  [{who:'sakuya', text:'完璧でエレガントな結末です'}],
      lose: [{who:'sakuya', text:'ナイフが足りませんでしたか…'}],
    },
    flandre: {
      talk: [
        {who:'flandre', text:'ねぇ、遊んでくれるの？'},
        {who:'reimu', text:'加減を知らない子は苦手なのよ…'},
        {who:'flandre', text:'きゅっとしてドカーン！'},
      ],
      win:  [{who:'flandre', text:'壊しちゃった☆'}],
      lose: [{who:'flandre', text:'もう終わり？つまんないの'}],
    },
  },

  /* ---- 先バレ(大妖精) ---- */
  bare: {
    norm: [{who:'daiyousei', text:'あ、あの…何か来るかも…！'}],
    gold: [{who:'daiyousei', text:'き、金色！大チャンスです！！'}],
  },

  /* ---- 全回転(るーみあ黒) ---- */
  zen: [
    {who:'rumia', text:'───宵闇が、堕ちてくる'},
    {who:'reimu', text:'これは…！'},
  ],

  /* ---- ゲーミング典ちゃん(虹プレミア) ---- */
  tenko: [
    {who:'marisa', text:'虹色！？確定演出だぜ！！'},
  ],

  /* ---- RUSH突入/失敗/終了 ---- */
  rushIn: [
    {who:'remilia', text:'ここからは紅霧の時間よ！'},
    {who:'flandre', text:'おねえさまと一緒に遊ぼ！'},
  ],
  rushInFail: [
    {who:'flandre', text:'まだ帰さないよ？引き戻しちゃう'},
  ],
  rushOut: [
    {who:'reimu', text:'霧が晴れたわね。仕切り直しよ'},
  ],
};
