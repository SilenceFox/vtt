<script>
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import Counter from './lib/Counter.svelte'
  let username = 'Rafa'
  let time = '01/01/2024 - 01:00:30'
</script>

<body>
  <div id="chat-container">
    <div id="chat-header">
      <p class="username-show">{username}</p>
    </div>
    <!-- NOTE: Esse é o quadrado de cor mais clara onde vão ficar as mensagens dentro. -->
    <!-- TODO: É tarefa do script deixar o chat na parte debaixo toda vez que uma mensagem é adicionada. -->
    <div id="chat-content">
      <!-- NOTE: Aqui tem um exemplo de mensagem do PRÓPRIO usuários. -->
      <div class="user-chat-message">
        <div class="message-name">{username}</div>
        <div class="message-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, odit.</div>
        <div class="message-time">{time}</div>
      </div>
      <!-- NOTE: Aqui acaba o exemplo de mensagem do PRÓPRIO usuários. -->
      <!-- NOTE: Aqui começa o exemplo de mensagem do OUTRO usuário. -->
      <div class="chat-message">
        <div class="message-name">{username}-2</div>
        <div class="message-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus modi officiis quo sint quae iusto ut minima tenetur repudiandae quaerat sapiente ullam nam repellat distinctio, consequatur dicta ipsam velit doloremque.</div>
        <div class="message-time">{time}</div>
      </div>
      <!-- NOTE: Aqui acaba o exemplo de mensagem do OUTRO usuário. -->
      <div class="chat-message">
        <div class="message-name">{username}-2</div>
        <div class="message-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus modi officiis quo sint quae iusto ut minima tenetur repudiandae quaerat sapiente ullam nam repellat distinctio, consequatur dicta ipsam velit doloremque.</div>
        <div class="message-time">{time}</div>
      </div>
    </div>
    <div id="chat-footer">
      <!-- TODO: Rato vai arrumar isso daqui pra funcionar de verdade. -->
      <form method="GET">
        <input id="chat-input" type="text" autocomplete="off" name="chat-input" placeholder="Send a message...">
        <button id="chat-submit">
          <i class="nf nf-md-send"></i>
        </button>
      </form>
    </div>
  </div>
</body>

<style>
</style>
