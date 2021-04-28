package br.com.reobra.model;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name="tbl_atividade_agendada")
public class AtividadeAgendada {
	
	@Id
	@Column(name="atividadeid")
	private int atividadeId;

	@Column(name="actualstart")
	private LocalDate actualStart;
	
	@Column(name="actualend")
	private LocalDate actualEnd;
	
	@Column(name = "pjo_tipodeatividade")
	private String pjoTipoAtividade;
	
	@Column(name = "subject")
	private String subject;
	
	@Column(name="pjo_empreendimentoid")
	private int pjoEmpreendimentoId;
	
	@Column(name="pjo_blocoid")
	private int pjoBlocoId;
	
	@Column(name="pjo_unidadeid")
	private int pjoUnidadeId;
	
}
