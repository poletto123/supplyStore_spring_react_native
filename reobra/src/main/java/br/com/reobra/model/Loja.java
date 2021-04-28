package br.com.reobra.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name="tbl_loja")
public class Loja {
    @Id
    @SequenceGenerator(name = "seqLoja", sequenceName = "seqLoja", initialValue = 1, allocationSize = 1)
    @GeneratedValue(generator = "seqLoja")
    @Column(name="loja_id")
    private Long id;

    @Column
    private String razao_social;

    @Column(unique = true)
    private String cnpj;
    
}
