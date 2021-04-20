package br.com.cyrella.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;
import java.util.List;

@RestController("cyrella")
public class Controller {

    @GetMapping("atividades")
    public List<?> atividades(){

        return Collections.emptyList();
    }

    @GetMapping("ocorrencias")
    public List<?> ocorrencias(){

        return Collections.emptyList();
    }

}
