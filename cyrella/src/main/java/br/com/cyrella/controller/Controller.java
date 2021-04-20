package br.com.cyrella.controller;


import br.com.cyrella.model.AtividadeAgendada;
import br.com.cyrella.model.Ocorrencia;
import br.com.cyrella.repository.AtividadeAgendadaRepository;
import br.com.cyrella.repository.OcorrenciaRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;
import java.util.List;

@RestController("cyrella")
public class Controller {
    private AtividadeAgendadaRepository atividadeAgendadaRepository;

    private OcorrenciaRepository ocorrenciaRepository;

    public Controller(AtividadeAgendadaRepository atividadeAgendadaRepository, OcorrenciaRepository ocorrenciaRepository) {
        this.atividadeAgendadaRepository = atividadeAgendadaRepository;
        this.ocorrenciaRepository = ocorrenciaRepository;
    }

    @GetMapping("atividades")
    public List<AtividadeAgendada> atividades(){

        return atividadeAgendadaRepository.findAll();
    }

    @GetMapping("ocorrencias")
    public List<Ocorrencia> ocorrencias(){

        return ocorrenciaRepository.findAll();
    }

}
