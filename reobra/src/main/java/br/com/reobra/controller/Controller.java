package br.com.reobra.controller;


import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.reobra.model.AtividadeAgendada;
import br.com.reobra.model.Ocorrencia;
import br.com.reobra.repository.AtividadeAgendadaRepository;
import br.com.reobra.repository.OcorrenciaRepository;

@RestController
@RequestMapping("/cyrella")
public class Controller {
    private AtividadeAgendadaRepository atividadeAgendadaRepository;

    private OcorrenciaRepository ocorrenciaRepository;

    public Controller(AtividadeAgendadaRepository atividadeAgendadaRepository, OcorrenciaRepository ocorrenciaRepository) {
        this.atividadeAgendadaRepository = atividadeAgendadaRepository;
        this.ocorrenciaRepository = ocorrenciaRepository;
    }

    @GetMapping("/atividades")
    public List<AtividadeAgendada> atividades(){

        return atividadeAgendadaRepository.findAll();
    }

    @GetMapping("/ocorrencias")
    public List<Ocorrencia> ocorrencias(){

        return ocorrenciaRepository.findAll();
    }

}
