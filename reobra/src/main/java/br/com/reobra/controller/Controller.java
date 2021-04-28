package br.com.reobra.controller;


import java.util.List;

import br.com.reobra.model.Loja;
import br.com.reobra.model.Produto;
import br.com.reobra.repository.LojaRepository;
import br.com.reobra.repository.ProdutoRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/reobra")
public class Controller {
    private LojaRepository lojaRepository;

    private ProdutoRepository produtoRepository;

    public Controller(LojaRepository lojaRepository, ProdutoRepository produtoRepository) {
        this.lojaRepository = lojaRepository;
        this.produtoRepository = produtoRepository;
    }

    @GetMapping("/loja")
    public ResponseEntity<List<Loja>> listarLojas(){
        List<Loja> lojas = lojaRepository.findAll();
        return new ResponseEntity<List<Loja>>(lojas, HttpStatus.OK);
    }

    @PostMapping("/loja")
    public ResponseEntity<Loja> salvarLoja(@RequestBody Loja loja) {
        Loja novaLoja = lojaRepository.save(loja);
        return new ResponseEntity<Loja>(novaLoja, HttpStatus.CREATED);
    }

    @DeleteMapping("/loja/{id}")
    public ResponseEntity<?> excluirLojas(@PathVariable("id") long id) {
        lojaRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/produto")
    public ResponseEntity<List<Produto>> listarProdutos(){
        List<Produto> produtos = produtoRepository.findAll();
        return new ResponseEntity<List<Produto>>(produtos, HttpStatus.OK);
    }

    @PostMapping("/produto")
    public ResponseEntity<Produto> salvarProduto(@RequestBody Produto produto) {
        Produto novoProduto = produtoRepository.save(produto);
        return new ResponseEntity<Produto>(novoProduto, HttpStatus.CREATED);
    }

    @DeleteMapping("/produto/{id}")
    public ResponseEntity<?> excluirProduto(@PathVariable("id") long id) {
        produtoRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
