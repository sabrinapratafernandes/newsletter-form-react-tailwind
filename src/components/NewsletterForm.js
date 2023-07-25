import React, { useState } from 'react';

// Componente NewsletterForm
const NewsletterForm = () => {
  // Estados para armazenar o valor do email, se houver erro e se houver sucesso
  const [email, setEmail] = useState(''); // Estado para o valor do email digitado pelo usuário
  const [error, setError] = useState(false); // Estado para controlar a exibição da mensagem de erro
  const [success] = useState(false); // Estado para controlar a exibição da mensagem de sucesso

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
  };

  // Retorna a interface do componente com o formulário e as mensagens de erro/sucesso
  return (
    <form 
        onSubmit={handleSubmit} 
        onInvalid={ () => setError(true) }
        
        className="flex flex-col text-blue-dark text-xs"
    >
      <span className="
          block 
          text-sm 
          font-medium 
          text-slate-700">
          Email address
      </span>
      {/* Campo de input para o email */}
      <input
        type="email"
        placeholder="email@company.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)} // Atualiza o estado do email conforme o usuário digita o email
        className={`
          border 
          p-2 
          rounded-md 
          focus:outline-none 
          focus:border-blue-300 
          focus:ring 
          ${error ? 'border-red-500' : 'border-slate-300'}
        `}
        
      />
      
      {error && 
        <p className="text-red-500 mt-2">
          Valid email Required | Insira um email válido.
        </p>
      }
      
      {success && 
        <p className="text-green-500 mt-2">
          Inscrição realizada com sucesso!
        </p>
      }
      <button
        type="submit"
        className="
          border-2
          rounded-md
          self-center
          bg-blue-darkOpaque
          font-bold
          text-white
          text-sm
          p-4
          m-2
          w-full"
      >
        Subscribe to monthly newsletter
      </button>
    </form>
  );
};

export default NewsletterForm;
