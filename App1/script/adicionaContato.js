
        angular.module("listaTelefonica", [])
        angular.module('listaTelefonica').controller("listaTelefonicaCtrl", ($scope) => {
            $scope.app = "Lista Telefônica"

            $scope.contatos = [
                { nome: "Pedro", telefone: '9999888' , cor:"yellow" },
                { nome: "José", telefone: '9999555' , cor:"blue"},
                { nome: "Maria", telefone: '9999222' , cor:"purple"}
            ]

            $scope.operadoras = [
                {nome:"Oi", codigo:14, categoria:"celular"},
                {nome:"Vivo", codigo:15, categoria:"celular"},
                {nome:"Tim", codigo:41, categoria:"celular"},
                {nome:"GVT", codigo:25, categoria:"fixo"},
                {nome:"Embratel", codigo:21, categoria:"fixo"},
            ]

            
            $scope.apagarContatos = (contatos)=>{
               $scope.contatos = contatos.filter((contato)=>{
                    if (!contato.selecionado) return contato
                })   
            }

            $scope.adicionarContato = (contato)=>{
                 $scope.contatos.push(angular.copy(contato))
                 delete $scope.contato
            }

            $scope.isContatoSelecionado =(contatos)=>{
                  return contatos.some((contato)=>{
                    return contato.selecionado;
                })
            }

        })

