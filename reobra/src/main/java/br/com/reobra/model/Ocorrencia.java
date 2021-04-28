package br.com.reobra.model;

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
@Table(name="tbl_ocorrencia")
public class Ocorrencia {
	
	@Id
	@Column(name="ticketnumber")
	private int ticketNumber;

	@Column(name="pjo_clientedaunidade ")
	private String pjoClienteUnidade ;
	
	@Column(name="pjo_empreendimentoid")
	private int pjoEmpreendimentoId;
	
	@Column(name = "pjo_tipodeatividade")
	private String pjoTipoAtividade;
	
	@Column(name = "pjo_bloco")
	private String pjoBloco;
	
	@Column(name="pjo_unidade")
	private String pjoUnidade;
	
	@Column(name="pjo_bandeira")
	private String pjoBandeira;
	
	@Column(name="description")
	private String description;

}
