package br.com.reobra.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name="tbl_loja")
public class Loja {
    @Id
    @Column(name="loja_id")
    private Long id;

    @Column
    private String razao_social;

    @Column(unique = true)
    private String cnpj;
    
}
